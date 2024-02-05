import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssuePageDetails = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <p>{issue?.title}</p>
      <p>{issue?.status}</p>
      <p>{issue?.createdAt.toDateString()}</p>
      <p>{issue?.description}</p>
    </div>
  );
};

export default IssuePageDetails;
