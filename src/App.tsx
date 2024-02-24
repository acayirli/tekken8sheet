import { useState } from "react";
import { Move } from "./components/Move/Move";
import { SheetType } from "./types";
import { JsonImporter } from "./components/JsonImporter/JsonImporter";
import TxtImporter from "./components/TxtImporter/TxtImporter";

export function App() {
    const [data, setData] = useState<SheetType | undefined>();

    if (data) {
        return (
            <div>
                <TxtImporter onChange={setData} />

                {data && (
                    <>
                        <div
                            css={{
                                fontSize: 36,
                                marginBottom: 10,
                                fontFamily: "RobotoCondensedItalic, sans-serif",
                            }}
                        >
                            {data.title.toUpperCase()}
                        </div>

                        <div
                            css={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(500px, 1fr))",
                                gap: 20,
                            }}
                        >
                            {data.categories.map((category) => (
                                <div
                                    css={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 10,
                                    }}
                                >
                                    <div css={{ fontSize: 24 }}>
                                        {category.title}
                                    </div>

                                    <div
                                        css={{
                                            display: "grid",
                                            gridTemplateColumns:
                                                "max-content max-content max-content",
                                            alignItems: "center",
                                            gridRowGap: 10,
                                            gridColumnGap: 20,
                                            img: { width: 30 },
                                        }}
                                    >
                                        {category.moves.map((move) => (
                                            <Move move={move} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
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
                    gap: 10,
                    flexGrow: 1,
                }}
            >
                <div
                    css={{
                        fontSize: 32,
                    }}
                >
                    Upload a txt file to get started.
                </div>

                <TxtImporter onChange={setData} />
                
                Here is an example:

                <div>
                    <pre>
                    Nina

                    # Neutral
                    df 1 2 (pressure with extensions)
                    df 3 1 (pressure with extensions)
                    df 3 3 (mid mid force crouch)
                    </pre>
                </div>
            </div>
        );
    }
}
