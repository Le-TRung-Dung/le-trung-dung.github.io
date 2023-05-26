import "./orderonline.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useTranslation, withTranslation } from "react-i18next";
import { useState } from "react";

const OrderOnline = () => {
  const { t, i18n } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email , setEmail] = useState ("");
  const [content , setContent] = useState ("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  
  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }
  
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const onFinish = (values) => {
    if (!name || !phoneNumber || !email || !content) {
        return;
      } else {
    messageApi.open({
        type: 'success',
        content: t("You have been contacted successfully"),
      });
    }
    
  };


  return (
    <>
      <div className="dat-online">
        <div className="dat-online-over">
          <div className="dat-online-detail">
            <div className="dat-online-table">
              <div className="dat-online-title">
                <h3>{t("Order online now")}</h3>
              </div>
              <div className="dat-online-title2">
                <h2>{t("No more waiting")}</h2>
              </div>
              <div className="oder-content">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: t("Please complete all information"),
                      },
                    ]}
                  >
                    <Input
                      onChange={handleNameChange}
                      style={{ width: "500px", margin: "20px 20px 0 20px" }}
                      name=""
                      placeholder={t("First and last name")}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: t("Please complete all information"),
                      },
                    ]}
                  >
                    <Input
                    onChange={handleEmailChange}
                      style={{ width: "500px" }}
                      placeholder={t("Your email address")}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: t("Please complete all information"),
                      },
                    ]}
                  >
                    <Input
                    onChange={handlePhoneChange}
                      style={{ width: "500px" }}
                      placeholder={t("Phone number")}
                    />
                  </Form.Item>
                  <Form.Item
                    name="content"
                    rules={[
                      {
                        required: true,
                        message: t("Please complete all information"),
                      },
                    ]}
                  >
                    <Input
                      onChange={handleContentChange}
                      placeholder={t("Content")}
                      style={{
                        height: "132px",
                        paddingBottom: "100px",
                        width: "500px",
                      }}
                    />
                  </Form.Item>
                  {contextHolder}
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginBottom: "30px", width: "150px" }}
                    >
                      {t("Order now")}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
