import {
  Indicator,
  Menu,
  Notification,
  rem,
} from "@mantine/core";
import {
  IconBell,
  IconCheck,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications, readNotifications } from "../../Service/NotiService";


const NotiMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [notifications, setNotifications] = useState<any>([]);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    getNotifications(user.id).then((res) => setNotifications(res))
    .catch((err) => console.log(err))
  }, [user])

  const unread = (index:number) => {
    let notis = [...notifications];

    notis = notis.filter((noti:any, i:number) => i != index);
    setNotifications(notis);
    readNotifications(notifications[index].id).then((res) => console.log(res))
    .catch((err) => console.log(err));
  }



  return (
    <Menu shadow="md" width={400} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="hidden cursor-pointer text-gray-200  sm:block border-gray-600 border-2 rounded-full p-1">
          <Indicator processing color="yellow.6">
            <IconBell size={19} className="transition hover:scale-120" />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        {/* <Stack align="stretch" gap="xs" ></Stack> */}
        <div className="flex flex-col gap-2">
        {notifications.length != 0 ? notifications.map((noti:any, index:number) =>  <Notification key={index} onClose={() => unread(index)}
          className="hover:!bg-gray-800 !bg-zinc-900 cursor-pointer"
          icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
          color="teal"
          title={noti.action}
        >
          {noti.message}
        </Notification>): <div className="text-center">No Notifications</div>
        }

</div>
        <Menu.Divider />
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotiMenu;
