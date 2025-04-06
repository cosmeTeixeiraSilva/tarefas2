
import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'


export default function Page() {
    return (
        <div className='mt-4 flex flex-col  items-center justify-center  gap-y-3 '>
            <Link href={"/produtos2"}>
                <Card className="w-[90vw] h-[10rem] border-4 border-orange-400">
                    <CardHeader>
                        <CardTitle className="text-center text-orange-400 ">App Produtos 2.0</CardTitle>

                    </CardHeader>
                    <CardContent className="text-center">
                        <p>NextJS PostGreSQL PrismaORM</p>
                    </CardContent>

                </Card>
            </Link>

            <Link href={"/tarefas"}>
                <Card className="w-[90vw] h-[10rem] border-4 border-orange-400">
                    <CardHeader>
                        <CardTitle className="text-center text-orange-400 ">App Tarefas </CardTitle>

                    </CardHeader>
                    <CardContent className="text-center">
                        <p>NextJS PostGreSQL PrismaORM</p>
                    </CardContent>

                </Card>
            </Link>
            <Link href={"/produtos"}>
                <Card className="w-[90vw] h-[10rem] border-4 border-orange-400">
                    <CardHeader>
                        <CardTitle className="text-center text-orange-400 "> App Produtos </CardTitle>

                    </CardHeader>
                    <CardContent className="text-center">
                        <p>NextJS PostGreSQL PrismaORM</p>
                    </CardContent>

                </Card>
            </Link>


        </div >
    )
}

