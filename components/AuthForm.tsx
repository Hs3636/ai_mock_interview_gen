"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"
import { auth } from "@/firebase/client"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { signUp, signIn } from "@/lib/actions/auth.action"


const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(2) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3)
    })
}

const AuthForm = ({ type }: { type: FormType }) => {
  
  const router = useRouter();
  const formSchema = authFormSchema(type);

  // Define form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // Submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        if (type === 'sign-in') {
            const {email, password} = values;

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await userCredential.user.getIdToken();

            if(!idToken) {
                toast.error('Failed to sign in');
                return;
            }

            await signIn({email, idToken});

            toast.success('Signed in successfully');
            router.push('/');
        } else {

            const {name, email, password} = values;

            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

            const result = await signUp({
                uid: userCredentials.user.uid,
                name: name!,
                email, 
                password
            });

            if(!result?.success) {
                toast.error(result?.message);
                return;
            }

            toast.success('Account created successfully. Please sign in.');
            router.push('/sign-in');  // Redirect to sign-in after signup
        }
    } catch (error) {
        console.log(error);
        toast.error(`There was an error: ${error}`);
    }
  }

  const isSignup = type === 'sign-up'; // Corrected variable name for clarity

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-bold">HireGenie</h2>
        </div>
        <h3>Practice job interviews with AI</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {isSignup && ( // Show "Name" field only for sign-up
              <FormField control={form.control} name="name" label="Name" placeholder="Name" />
            )}
            <FormField control={form.control} name="email" label="Email" placeholder="Your email address" type="email" />
            <FormField control={form.control} name="password" label="Password" placeholder="Enter your password" type="password" />
            <Button className="btn" type="submit">{isSignup ? "Create an account" : "Sign In"}</Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <Link href={isSignup ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
            {isSignup ? "Sign in" : "Create an Account"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
