import { Column, Meta, Schema, Text, Button, RevealFx } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
      <RevealFx translateY="16" delay={0.2}>
        <Column fillWidth paddingY="32" horizontal="center">
          <Text 
            align="center" 
            variant="heading-default-l" 
            onBackground="neutral-weak"
            wrap="balance"
          >
            Like what you see?{" "}
            <Button 
              href="https://x.com/andresmendezdev" 
              variant="tertiary" 
              size="m"
              style={{ display: "inline", padding: 0, textDecoration: "underline", fontSize: "inherit", border: "none" }}
            >
              Let's work together!
            </Button>
          </Text>
        </Column>
      </RevealFx>
    </Column>
  );
}
