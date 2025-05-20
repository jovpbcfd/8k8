"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Children = {
  _type: string;
  text: string;
  _key: string;
};

type Block = {
  _type: string;
  style: string;
  _key: string;
  children: Children[];
};

type HeadingNode = {
  id: string;
  text: string;
  level: number;
  children: HeadingNode[];
};

function getHeadingLevel(style: string): number {
  return parseInt(style.replace("h", ""), 10);
}

// Emoji mapping based on keywords in the heading
// function getEmojiForHeading(text: string): string {
//   const mapping: Record<string, string> = {
//     Highlights: "🎯",
//     World: "💥",
//     Should: "🎮",
//     Games: "🕹️",
//     Slot: "🎰",
//     Bingo: "🎱",
//     Mines: "💣",
//     Dealer: "🃏",
//     Sports: "⚽",
//     Poker: "♠️",
//     Lottery: "🧾",
//     Fishing: "🎣",
//     Cockfight: "🐓",
//   };

//   for (const keyword in mapping) {
//     if (text.includes(keyword)) return mapping[keyword];
//   }
//   return "•";
// }

// Converts flat heading list to a tree structure
function buildHeadingTree(headings: HeadingNode[]): HeadingNode[] {
  const root: HeadingNode[] = [];
  const stack: HeadingNode[] = [];

  for (const heading of headings) {
    while (stack.length > 0 && heading.level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(heading);
      stack.push(heading);
    } else {
      const parent = stack[stack.length - 1];
      parent.children.push(heading);
      stack.push(heading);
    }
  }

  return root;
}

// Recursive rendering of nested heading tree
function RenderHeadings({
  nodes,
  activeId,
}: {
  nodes: HeadingNode[];
  activeId: string | null;
}) {
  return (
    <ul className="space-y-2 lg:ml-5">
      {nodes.map((node) => (
        <li key={node.id} className={`ml-${(node.level - 2) * 4}`}>
          <Link
            href={`#${node.id}`}
            className={`flex items-center gap-2 font-medium transition-colors ${
              activeId === node.id
                ? "text-white"
                : "text-white/75 hover:text-white"
            }`}
          >
            <span className="font-bold text-2xl">&#9679;</span>
            <span className="font-[600] text-xl text-yellow-300">
              {node.text}
            </span>
          </Link>
          {node.children.length > 0 && (
            <div className="mt-1 ml-4">
              <RenderHeadings nodes={node.children} activeId={activeId} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function TableOfContent({
  currentPost,
}: {
  currentPost: { body: Block[] };
}) {
  const [activeSubHeading, setActiveSubHeading] = useState<string | null>(null);

  // Flatten all heading blocks into nodes
  const flatHeadings: HeadingNode[] = currentPost.body
    .filter(({ _type, style }) => _type === "block" && style.startsWith("h"))
    .map(({ _key, children, style }) => ({
      id: _key,
      text: children.map((c) => c.text).join(""),
      level: getHeadingLevel(style),
      children: [],
    }));

  const headingTree = buildHeadingTree(flatHeadings);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSubHeading(entry.target.id);
            break;
          }
        }
      },
      { root: null, threshold: 0.5 }
    );

    flatHeadings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => {
      flatHeadings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [flatHeadings]);

  return (
    <nav className="max-h-[70vh] overflow-y-auto py-2 text-md">
      <RenderHeadings nodes={headingTree} activeId={activeSubHeading} />
    </nav>
  );
}

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// type Children = {
//   _type: string;
//   text: string;
//   _key: string;
// };

// type Subheading = {
//   id: string;
//   text: string;
//   key: string;
// };

// export default function TableOfContent({
//   currentPost,
// }: {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   currentPost: any;
// }) {
//   const [activeSubHeading, setActiveSubHeading] = useState<null | string>(null);

//   const subHeading: Subheading[] = currentPost?.body
//     .filter(
//       ({ _type, style }: { _type: string; style: string }) =>
//         _type === "block" && style === "h2"
//     )
//     .map(({ _key, children }: { _key: string; children: Children[] }) => ({
//       id: _key,
//       text: children.map(({ text }) => text).join(""),
//       key: _key,
//     }));

//   useEffect(() => {
//     const observerOptions = {
//       root: null, // viewport
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       // if (isManualScroll.current) return;
//       let isHeadingInView = false;

//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSubHeading(entry.target.id);
//           isHeadingInView = true;
//         }
//       });

//       // If no heading is visible, reset the active heading
//       if (!isHeadingInView) {
//         setActiveSubHeading(null);
//       }
//     }, observerOptions);

//     // Observe each h2 element
//     subHeading?.forEach(({ id }) => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       // Cleanup observer on unmount
//       subHeading?.forEach(({ id }) => {
//         const element = document.getElementById(id);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, [subHeading]);

//   return (
//     <ul className="max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-md">
//       {subHeading.map((post) => (
//         <li key={post.key}>
//           <Link
//             href={`#${post.id}`}
//             className={`block leading-[1.6] font-medium hover:text-white ${activeSubHeading == post.id ? "text-white" : "text-white/75"}`}
//           >
//             {post.text}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }
