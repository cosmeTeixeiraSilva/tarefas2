import Menu from "./_components/menu";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center w-screen bg-slate-200">
            <Menu />
            {children};
        </div>
    )
}
