import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issues = () => {
  return (
    <Button>
      <Link href="issues/new">New Issue</Link>
    </Button>
  );
};

export default Issues;
