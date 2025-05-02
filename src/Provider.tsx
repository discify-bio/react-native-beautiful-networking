import type { PropsWithChildren } from 'react'
import type { ProviderProps } from './types'
import Context from './Context'
import { useNetInfo } from '@react-native-community/netinfo'
import { Portal } from 'react-native-portalize'
import Notification from './components/Notification'

const Provider: React.FC<PropsWithChildren<ProviderProps>> = ({
  children,
  config
}) => {
  const { isConnected } = useNetInfo()

  return (
    <Context.Provider
      value={null}
    >
      <Portal>
        {isConnected !== null && (
          <Notification
            {...config}
            isVisible={!(!!isConnected)}
          />
        )}
      </Portal>
      {children}
    </Context.Provider>
  )
}

export default Provider
