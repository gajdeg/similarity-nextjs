"use client";

import { FC } from "react";
import { Tabs, TabsContent, TabsTrigger } from "@/ui/Tabs";
import { TabsList } from "@radix-ui/react-tabs";
import Code from "@/ui/Code";
import { nodejs, python } from "@/helpers/documentation-code";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code language="javascript" code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code language="python" code={python} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;