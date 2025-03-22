import { Children, type ReactElement, type ReactNode, isValidElement, useState } from "react";

type FunnelStepProps = {
  name: string;
  children: ReactNode;
};

type FunnelComponent = {
  (props: { children: ReactNode }): ReactNode;
  Step: (props: FunnelStepProps) => ReactNode;
  setStep: (step: string) => void;
};

export const useFunnel = () => {
  const [step, setStep] = useState<string>("step1");

  const Step = ({ children }: Omit<FunnelStepProps, "name">) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: { children: ReactNode }): ReactNode => {
    const steps = Children.toArray(children) as ReactElement<FunnelStepProps>[];

    const targetStep = steps.find(
      (child): child is ReactElement<FunnelStepProps> =>
        isValidElement<FunnelStepProps>(child) && child.props.name === step,
    );

    return targetStep;
  };

  return Object.assign(Funnel, { Step, setStep }) as FunnelComponent;
};
