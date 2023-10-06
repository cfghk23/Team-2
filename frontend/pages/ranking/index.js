import React, { useState } from "react";
import { useRouter } from "next/router";
import PageTemplate from "@components/reusable/template/pageTemplate";


function ranking() {
    const router = useRouter();

return (
    <>
      <PageTemplate>
      This is ranking page
      </PageTemplate>
    </>
  );
}

export default ranking;