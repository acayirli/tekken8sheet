import { useState } from "react";
import { SheetType } from "./types";
import TxtImporter from "./components/TxtImporter/TxtImporter";
import { Sheet } from "./components/Sheet/Sheet";
import { Move } from "./components/Move/Move";

const ninaDemo: SheetType = {
    title: "Nina",
    categories: [
        {
            title: "Neutral",
            moves: [
                {
                    inputs: ["df", "1", "2"],
                    hint: "pressure with extensions",
                },
                {
                    inputs: ["d", "df", "f"],
                    hint: "step stance",
                },
                {
                    inputs: ["1+4"],
                    hint: "mid grounded force crouch",
                }
            ]
        },
        {
            title: "Launcher",
            moves: [
                {
                    inputs: ["df", "2"],
                    hint: "safe mid launcher",
                },
                {
                    inputs: ["b", "1+4"],
                    hint: "launcher",
                }
            ]
        },
        {
            title: "Lows",
            moves: [
                {
                    inputs: ["d", "3", "4", "3"],
                    hint: "CH string",
                },
                {
                    inputs: ["db", "3"],
                    hint: "",
                }
            ]
        },
        {
            title: "Punish",
            moves: [
                {
                    inputs: ["1", "4"],
                    hint: "10f",
                },
                {
                    inputs: ["uf", "2"],
                    hint: "15f",
                }
            ]
        }
    ]
}

export function App() {
    const [data, setData] = useState<SheetType | undefined>();

    if (data) {
        return (
            <div>
                <div css={{ display: "flex", justifyContent: "flex-end" }}>
                    <TxtImporter onChange={setData} />
                </div>

                {data && <Sheet data={data} />}
            </div>
        );
    } 
    else {
        return (
            <div
                css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    flexGrow: 1,
                }}
            >
                <div
                    css={{
                        fontSize: 32,
                    }}
                >
                    Select a txt file to get started.
                </div>

                <TxtImporter onChange={setData} />
                
                <div css={{ display: "flex", gap: 40 }}>
                    <div css={{ display: "grid", gridTemplateColumns: "max-content max-content", gap: 10, "img": { width: 30 }, alignItems: "flex-start" }}>
                        <span css={{ gridColumnStart: "span 2" }}>List of recognized inputs</span>
                        <span>u</span><Move move={{ inputs: ["u"]}} />
                        <span>d</span><Move move={{ inputs: ["d"]}} />
                        <span>f</span><Move move={{ inputs: ["f"]}} />
                        <span>b</span><Move move={{ inputs: ["b"]}} />

                        <span>uf</span><Move move={{ inputs: ["uf"]}} />
                        <span>ub</span><Move move={{ inputs: ["ub"]}} />
                        <span>df</span><Move move={{ inputs: ["df"]}} />
                        <span>db</span><Move move={{ inputs: ["db"]}} />

                        <span>hold variant, e.g. fhold</span><Move move={{ inputs: ["fhold"]}} />
                        <span>n</span><Move move={{ inputs: ["n"]}} />

                        <span>1</span><Move move={{ inputs: ["1"]}} />
                        <span>2</span><Move move={{ inputs: ["2"]}} />
                        <span>3</span><Move move={{ inputs: ["3"]}} />
                        <span>4</span><Move move={{ inputs: ["4"]}} />

                        <span>1+2</span><Move move={{ inputs: ["1+2"]}} />
                        <span>1+3</span><Move move={{ inputs: ["1+3"]}} />
                        <span>1+4</span><Move move={{ inputs: ["1+4"]}} />
                        <span>2+3</span><Move move={{ inputs: ["2+3"]}} />
                        <span>2+4</span><Move move={{ inputs: ["2+4"]}} />
                        <span>3+4</span><Move move={{ inputs: ["3+4"]}} />
                        <span>1+2+3+4</span><Move move={{ inputs: ["1+2+3+4"]}} />

                        <span>bracketl</span><Move move={{ inputs: ["bracketl"]}} />
                        <span>bracketr</span><Move move={{ inputs: ["bracketr"]}} />
                    </div>

                    <div>
                        Source
                        <pre css={{ border: "thin solid #ccc", padding: "10px 20px", borderRadius: 5 }}>
                        {
`Nina

# Neutral
df 1 2 (pressure with extensions)
d df f (step)
1+4 (mid grounded force crouch)

# Launcher
df 2 (safe mid launcher)
b 1+4 (launcher)

# Lows
d 3 4 3 (CH string)
db 3

# Punish
1 4 (10f)
uf 2 (15f)
`
                        }
                        </pre>
                    </div>

                    <div>
                        Output

                        <div css={{ border: "thin solid #ccc", padding: "10px 20px", borderRadius: 5 }}>
                            <Sheet data={ninaDemo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
