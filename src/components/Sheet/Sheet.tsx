import { SheetType } from "../../types";
import { Move } from "../Move/Move";

export function Sheet({ data }: { data: SheetType })
{
    return (
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
                        key={category.title}
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
                            {category.moves.map((move, index) => (
                                <Move key={index} move={move} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}