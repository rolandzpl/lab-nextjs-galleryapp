export default function Page() {
    return (<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <h1>LITHIUM SOFTWARE</h1>
            <div>
                Witam na stronie firmy Roland Żerek Lithium Software. Zajmujemy się tworzeniem oprogramowania, które wspiera zarządzanie danymi osobowymi zgodnie z RODO. Nasze rozwiązania są dostosowane do potrzeb różnych branż.
            </div>
            <div>
                <h2>Używane technologie:</h2>
                <div>
                    <div>Frontendy webowe</div>
                    <ul>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <div>Na backendzie</div>
                    <ul>
                        <li>dotnet</li>
                        <li>docker/podman</li>
                    </ul>
                </div>
                <div>
                    <div>Chmura - AZURE</div>
                </div>
            </div>
        </main>
    </div>);
}
