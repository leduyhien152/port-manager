import type { NextPage } from 'next';

interface Props {
  timestamp: string;
  icon: string;
  content: React.ReactNode;
  hasLine?: boolean;
}

const TimelineEntry = ({ timestamp, icon, content, hasLine }: Props) => {
  return (
    <div className="flex items-center flex-wrap mb-8 md:flex-nowrap">
      <div className="font-timestamp text-lg md:w-44 md:text-right md:flex-shrink-0">
        {timestamp}
      </div>
      <div className="w-8 h-8 bg-white flex m-4 justify-center items-center text-xl">
        {hasLine && (
          <span className="md:w-[1px] md:h-[calc(100%-3rem)] md:bg-timeline md:absolute md:top-4 md:-z-1"></span>
        )}
        {icon}
      </div>
      <div>{content}</div>
    </div>
  );
};

export const Timeline: NextPage = () => {
  return (
    <section className="max-w-1000 m-auto p-8 relative">
      <h3 className="text-xl leading-snug font-medium my-2 text-center pb-8">
        If you’re a developer, this story will sound familiar.
      </h3>
      <div className="md:relative">
        <TimelineEntry
          timestamp="9.02 a.m."
          icon="👩‍💻"
          hasLine
          content={
            <p>
              You fire up a project and are interrupted by an obnoxious{' '}
              <strong>EADDRINUSE</strong> message.
            </p>
          }
        />
        <TimelineEntry
          timestamp="9.04 a.m."
          icon="💭"
          content={
            <>
              <p>
                <em>
                  <q>How do I kill a process on mac?</q>
                </em>
              </p>
              <p>
                Frustrated, you do some Googling and find a series of commands
                on&nbsp;StackOverflow.
              </p>
            </>
          }
        />
        <TimelineEntry
          timestamp="9.06 a.m."
          icon="💥"
          content={
            <p>
              You fumble around in terminal with some unfamiliar commands until
              you manage to kill the process.
            </p>
          }
        />
        <TimelineEntry
          timestamp="2 days later..."
          icon="😫"
          content={
            <p>
              You get another <strong>EADDRINUSE</strong> message. You open
              Google and type{' '}
              <em>
                <q>How do I kill a process on mac?</q>
              </em>
              .
            </p>
          }
        />
      </div>
    </section>
  );
};
