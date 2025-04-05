import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Page() {
    return (
        <div className='w-[90vw] bg-[#121212] h-[80vh] rounded  border-4 border-orange-400 p-4'>
            <div className='flex w-full items-center justify-between'>
                <Link href={"/tarefas"}>
                    <Card className="w-[12rem] h-[10rem] border-4 border-orange-400">
                        <CardHeader>
                            <CardTitle className="text-center text-orange-400 ">App Tarefas </CardTitle>

                        </CardHeader>
                        <CardContent className="text-center">
                            <p>NextJS PostGreSQL PrismaORM</p>
                        </CardContent>

                    </Card>
                </Link>
                <Link href={"/produtos"}>
                    <Card className="w-[12rem] h-[10rem] border-4 border-orange-400">
                        <CardHeader>
                            <CardTitle className="text-center text-orange-400 "> App Produtos </CardTitle>

                        </CardHeader>
                        <CardContent className="text-center">
                            <p>NextJS PostGreSQL PrismaORM</p>
                        </CardContent>

                    </Card>
                </Link>

                <Link href={"/produtos2"}>
                    <Card className="w-[12rem] h-[10rem] border-4 border-orange-400">
                        <CardHeader>
                            <CardTitle className="text-center text-orange-400 ">App Produtos 2</CardTitle>

                        </CardHeader>
                        <CardContent className="text-center">
                            <p>NextJS PostGreSQL PrismaORM</p>
                        </CardContent>

                    </Card>
                </Link>
            </div>
            <Link href={"/"}>
                <Button className="bg-red-800 text-xl px-12 fixed top-8 right-20">Sair</Button>
            </Link>
            <h1 className=' w-full text-orange-500 fixed top-12 left-20'>Prof. Cosme Teixeira Silva - Senac Lavras - MG</h1>

        </div>
    )
}

