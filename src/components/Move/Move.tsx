import { useEffect } from "react";
import { InputsType, MoveType, PropertiesType } from "../../types";

import input1 from "../../assets/1.webp";
import input2 from "../../assets/2.webp";
import input3 from "../../assets/3.webp";
import input4 from "../../assets/4.webp";
import input1_2 from "../../assets/1+2.webp";
import input1_3 from "../../assets/1+3.webp";
import input1_4 from "../../assets/1+4.webp";
import input2_3 from "../../assets/2+3.webp";
import input2_4 from "../../assets/2+4.webp";
import input3_4 from "../../assets/3+4.webp";
import input1_2_3_4 from "../../assets/1+2+3+4.webp";
import inputu from "../../assets/u.webp";
import inputd from "../../assets/d.webp";
import inputf from "../../assets/f.webp";
import inputb from "../../assets/b.webp";
import inputuf from "../../assets/uf.webp";
import inputub from "../../assets/ub.webp";
import inputdf from "../../assets/df.webp";
import inputdb from "../../assets/db.webp";
import inputbhold from "../../assets/bhold.webp";
import inputbracketl from "../../assets/bracketl.webp";
import inputbracketr from "../../assets/bracketr.webp";
import inputdbhold from "../../assets/dbhold.webp";
import inputdfhold from "../../assets/dfhold.webp";
import inputdhold from "../../assets/dhold.webp";
import inputfhold from "../../assets/fhold.webp";
import inputn from "../../assets/n.webp";
import inputubhold from "../../assets/ubhold.webp";
import inputufhold from "../../assets/ufhold.webp";
import inputuhold from "../../assets/uhold.webp";

import propchip from "../../assets/chip.webp";
import propheat from "../../assets/heat.webp";
import prophoming from "../../assets/homing.webp";
import proppowercrush from "../../assets/powercrush.webp";
import proptornado from "../../assets/tornado.webp";

const inputImageMap: Record<string, string> = {
    "1": input1,
    "2": input2,
    "3": input3,
    "4": input4,
    "u": inputu,
    "d": inputd,
    "f": inputf,
    "b": inputb,
    "uf": inputuf,
    "ub": inputub,
    "df": inputdf,
    "db": inputdb,
    "12": input1_2,
    "13": input1_3,
    "14": input1_4,
    "23": input2_3,
    "24": input2_4,
    "34": input3_4,
    "1234": input1_2_3_4,
    "B": inputbhold,
    "bracketl": inputbracketl,
    "bracketr": inputbracketr,
    "DB": inputdbhold,
    "DF": inputdfhold,
    "D": inputdhold,
    "F": inputfhold,
    "n": inputn,
    "UB": inputubhold,
    "UF": inputufhold,
    "U": inputuhold
};

const propertiesImageMap: Record<PropertiesType, string> = {
    "chip": propchip,
    "heat": propheat,
    "homing": prophoming,
    "powercrush": proppowercrush,
    "tornado": proptornado,
}

export function Move({ move }: { move: MoveType }) {
    const moves = move?.combo?.moves;
    const allSlugs = moves?.map((move) =>
        move.instructions.map((instruction) =>
            instruction.slug
        )
    );

    return !allSlugs ? null : (
        <>
            {allSlugs.map(moveSlugs => <div css={{
                display: "flex",
                gap: 5,
                alignItems: "center"
            }}>
                {
                    moveSlugs.map((input, index) => (
                      input in inputImageMap ?
                        <img key={index} src={inputImageMap[input]} alt={`Input ${input}`} /> :
                        <span key={index}>{input}</span>
                    ))
                }
            </div>)}

            <div css={{ display: "flex", gap: 5, alignItems: "center" }}>
                {
                    move.hitProperties &&
                        move.hitProperties.map((hitProp, index) => (
                            hitProp in propertiesImageMap && <img src={propertiesImageMap[hitProp]} alt={`Hit property ${hitProp}`} />
                        ))
                }
            </div>

            <span>
                {
                    move.hint
                }
            </span>
        </>
    );
}
