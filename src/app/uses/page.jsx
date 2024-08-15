import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build UI designs, stay productive and get results in time. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Powerfull desktop PC">
          </Tool>
          <Tool title="32-inch LG 2K (1440p) monitor">
          The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.
          </Tool>
          <Tool title="Logitech TKL SE mechanical keyboard">
          We know that in today's universe speed is worth gold. This keyboard helps me multitask and type at incredible speeds.
          </Tool>
          <Tool title="Sony Alpha A7iii">
          Currently my greatest and latest investment, this camera took my photography and editing skills beyond limits thanks to his amazing fidelity and image quality.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
          I started using Figma as just a design tool but now it’s become my
            virtual whiteboard for plenty of my jobs. Never would have expected
            the collaboration features to be the real hook
          </Tool>
          <Tool title="Creative Suit">
          I started using Figma as just a design tool but now it’s become my
            virtual whiteboard for plenty of my jobs. Never would have expected
            the collaboration features to be the real hook
          </Tool>
          <Tool title="Spline">
          I started using Figma as just a design tool but now it’s become my
            virtual whiteboard for plenty of my jobs. Never would have expected
            the collaboration features to be the real hook
          </Tool>
          <Tool title="Google Slides">
          I use Google Slides to quickly create and present dynamic designs that are easy to collaborate on and share with clients.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="SavvyCal">
          Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Miro">
          Miro its like a supercharger to my productivity, It always simplifyed collaboration, planning, and communication with my team members, really leading to better project outcomes.
          </Tool>
          <Tool title="Agile">
          I've been implementing the agile methodology for several years. My previous job taught it to me. I still remembering the day when the company's scrum master came to our team and told us that we could get better and bigger productivity and objetctives results by using that method. Turns out that she was absolutly right. With our photography team we were able to positive scale the company's kpi's and also make restaurants and company's revenue increase.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
