export interface NetworkingProps {
  backgroundColor: string
  textColor: string
  text: string,
  zIndex: number
  fontSize: number
  fontFamily: string
  paddingVertical: number
  paddingHorizontal: number
  duration?: number
}

export interface ProviderProps {
  config: NetworkingProps
}
