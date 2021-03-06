import type { NextPage } from 'next';

interface Props {
  timestamp: string;
  icon: string;
  content: React.ReactNode;
  hasLine?: boolean;
}

const TimelineEntry = ({ timestamp, icon, content, hasLine }: Props) => {
  return (
    <div className="flex items-center flex-wrap mb-8 last:mb-0 md:flex-nowrap">
      <div className="font-timestamp text-1.2 md:w-180 md:text-right md:flex-shrink-0">
        {timestamp}
      </div>
      <div className="w-8 h-8 bg-white flex m-4 justify-center items-center text-1.4">
        {hasLine && (
          <span className="md:w-[1px] md:h-[calc(100%-3rem)] md:bg-timeline md:absolute md:top-4 md:-z-1"></span>
        )}
        {icon}
      </div>
      <div className="leading-tight">{content}</div>
    </div>
  );
};

export const Timeline: NextPage = () => {
  return (
    <section className="max-w-1000 m-auto p-8 relative">
      <h3 className="text-1.3 leading-1.4 font-medium my-2 text-center pb-8">
        If youβre a developer, this story will sound familiar.
      </h3>
      <div className="md:relative">
        <TimelineEntry
          timestamp="9.02 a.m."
          icon="π©βπ»"
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
          icon="π­"
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
          icon="π₯"
          content={
            <p>
              You fumble around in terminal with some unfamiliar commands until
              you manage to kill the process.
            </p>
          }
        />
        <TimelineEntry
          timestamp="2 days later..."
          icon="π«"
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
