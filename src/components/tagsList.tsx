// TagsList.tsx
import React from "react";

type TagsListProps = {
  tags: string[];
};

export default function TagsList({ tags }: TagsListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="border border-border-color bg-slate-100 text-xs font-semibold mr-2 px-2.5 py-1 rounded-xl"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
