import { CategoryType, MoveType, SheetType } from "./types";

export const parseMove = (line: string): MoveType | null => {
    const hintIndex = line.indexOf('(');
    const hint = hintIndex !== -1 ? line.substring(hintIndex + 1, line.length - 1) : undefined;
  
    const inputsPart = hintIndex !== -1 ? line.substring(0, hintIndex) : line;
    const inputs = inputsPart.trim().split(' ');
  
    if (inputs.length === 0) return null; // Skip empty lines
  
    return { inputs, hint };
  };
  
  export const parseTxtFile = (text: string): SheetType => {
    const lines = text.split('\n').map(line => line.trim());
    const title = lines[0];
    const categories: CategoryType[] = [];
    let currentCategory: CategoryType | null = null;
  
    lines.slice(1).forEach(line => {
      if (!line) return; // Skip empty lines

      if(line.startsWith('#'))
      {
        currentCategory = { title: line.substring(1).trim(), moves: [] };
        categories.push(currentCategory);        
      }
      else
      {
        const move = parseMove(line);

        if(currentCategory && move)
        {
          currentCategory.moves.push(move);
        }
      }
    });
  
    return { title, categories };
  };