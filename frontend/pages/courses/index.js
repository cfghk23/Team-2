import React, { useState } from "react";
import { useRouter } from "next/router";
import PageTemplate from "@components/reusable/template/pageTemplate";


function courses() {
    const router = useRouter();

return (
    <>
      <PageTemplate>
      This is courses page
      </PageTemplate>
    </>
  );
}

export default courses;