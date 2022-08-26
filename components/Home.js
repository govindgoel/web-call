import React, { useCallback, useRef, useState } from 'react';
import Button from '@custom/shared/components/Button';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@custom/shared/components/Card';
import Field from '@custom/shared/components/Field';
import { TextInput } from '@custom/shared/components/Input';
import CreateRoomButton from './CreateRoomButton';

export const Home = ({ setRoom, setExpiry, isConfigured }) => {
  const roomRef = useRef(null);
  const [isValidRoom, setIsValidRoom] = useState(false);


  const checkValidity = useCallback(
    (e) => {
      if (e?.target?.checkValidity()) {
        setIsValidRoom(true);
      }
    },
    [isValidRoom]
  );


  const joinCall = useCallback(() => {
    const roomUrl = roomRef?.current?.value;
    setRoom(roomUrl);
  }, [roomRef]);

  return (
    <Card>
      <CardHeader>
        Create a Room 
      </CardHeader>
      <CardBody>
        <CreateRoomButton
          isConfigured={isConfigured}
          isValidRoom={isValidRoom}
          setRoom={setRoom}
          setExpiry={setExpiry}
        />
        {/* <Field label="Or enter room to join">
          <TextInput
            ref={roomRef}
            type="text"
            placeholder="Enter room URL..."
            pattern="^(https:\/\/)?[\w.-]+(\.(daily\.(co)))+[\/\/]+[\w.-]+$"
            onChange={checkValidity}
          />
        </Field>
        <CardFooter>
          <Button onClick={joinCall} disabled={!isValidRoom}>
            Join room
          </Button>
        </CardFooter> */}
      </CardBody>
    </Card>
  );
};

export default Home;
