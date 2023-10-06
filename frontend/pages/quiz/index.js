import React, { useState } from "react";
import { useRouter } from "next/router";
import PageTemplate from "@components/reusable/template/pageTemplate";


function quiz() {
    const router = useRouter();

return (
    <>
      <PageTemplate>
      This is quiz page
      </PageTemplate>
    </>
  );
}

export default quiz;