import { cn } from '@/utils/lib/cn'

interface ContainerProps {
  className?: string
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(className, 'container')}>{children}</div>
}

export default Container
