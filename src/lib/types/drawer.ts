export interface DrawerProps {
  className?: string,
  direction?: 'left' | 'right' | 'left' | 'bottom',
  contents?: React.ReactNode,
  isOpen?: boolean,
  toggleFn: () => void,
}

export interface DrawerContextProps {
  isOpen: boolean,
  contents: string,
  toggleFn: () => void
}