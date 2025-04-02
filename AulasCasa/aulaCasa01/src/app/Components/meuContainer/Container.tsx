type ContainerProps = {
    children: React.ReactNode;
    bgColor: string;
  };
  
  const Container = ({ children, bgColor }: ContainerProps) => {
    return <div className={`p-4 ${bgColor}`}>{children}</div>;
  };
  
  export default Container;
  