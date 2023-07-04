import { useSelector } from "react-redux";
import "./Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalOrder from "./ModalOrder";

function Orders() {
  const user = useSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/api/user/${user.email}`,
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      });
      setUserInfo(response.data);
    };
    getUser();
  }, []);
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/orders?userEmail=${
          user.email
        }`,
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      });
      setOrders(response.data);
    };
    getOrders();
  }, []);

  return (
    <>
      <h1 className="profile-title text-white text-left w-75 mx-auto">
        My Orders
      </h1>
      <div className="w-75 pt-2 mx-auto">
        {orders && (
          <div className="overflow-auto h-50">
            <table className="table table-dark table-hover text-center">
              <thead>
                <tr>
                  <th scope="col" className="bg-header">
                    ID
                  </th>
                  <th scope="col" className="bg-header">
                    Fullname
                  </th>
                  <th scope="col" className="bg-header">
                    Order
                  </th>
                  <th scope="col" className="bg-header">
                    Status
                  </th>
                  <th scope="col" className="bg-header">
                    Date
                  </th>
                  <th scope="col" className="bg-header">
                    Total
                  </th>
                </tr>
              </thead>
              {orders.length > 0 ? (
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td scope="row">{order.id}</td>
                      <td>{order.fullname}</td>
                      <td>
                        <ModalOrder products={order.order} order={order} />
                      </td>
                      <td>{order.status}</td>
                      <td>{order.createdAt.slice(0, 10)}</td>
                      <td>USD {order.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr className="my-0 mx-auto">
                    <td>You don't have any orders yet.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
