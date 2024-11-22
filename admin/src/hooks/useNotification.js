import { useEffect, useRef, useState } from 'react'
import { notification } from 'antd'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import socketIOClient from 'socket.io-client'
import { SOCKET_SERVER_URL } from '../utils/constant'

const PUSH_NOTIFICATION = 'push-notifications'
const RECIEVE_NOTIFICATION = 'recieve-notification'
const JOIN_CHANNEL = 'join-channel'

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]) // Sent and received messages
  const socketRef = useRef()
  const history = useHistory()

  useEffect(() => {
    socketRef.current = socketIOClient(
      process.env.NODE_ENV === 'development' ? 'https://vietcredit88.com/api/v1' : SOCKET_SERVER_URL,
      {
        query: {},
      }
    )
    socketRef.current.emit(JOIN_CHANNEL, { _id: 'root' })
    socketRef.current.on(RECIEVE_NOTIFICATION, payload => {
      setNotifications(prev => [payload, ...prev])
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const pushNotifications = ({ to, message, description }) => {
    socketRef.current.emit(PUSH_NOTIFICATION, {
      to: to,
      message,
      description,
      status: false,
    })
  }

  return { notifications, setNotifications, pushNotifications }
}

export default useNotifications
