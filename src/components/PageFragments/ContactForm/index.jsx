import { Col, Form, Input, Button, message } from "antd"
import React from "react"
import Config from "../../../../config"

const validateMessages = {
  required: "This field is required!",
  types: {
    email: "Not a valid email!",
  },
}
export default () => {
  const [form] = Form.useForm()
  const onFinish = data => {
    const formData = new FormData()
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key])
      }
    }

    fetch(Config.contactFormUrl, { method: "POST", body: formData })
      .then(() => {
        message.success(
          "Thank you for your kind response 🙂. Will get back to you."
        )
        form.resetFields()
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error("Error:", error))
  }

  return (
    <div>
      <h2 style={{ fontWeight: "300" }}>
        {" "}
        <a href="https://discord.io/prituhq" target="_blank">
          DISCORD
        </a>
        <br />
        <br />{" "}
        <a href="https://twitter.com/PrituDevYT" target="_blank">
          TWITTER
        </a>
        <br />
        <br />{" "}
        <a href="https://instagram.com/_pritu_004_" target="_blank">
          INSTAGRAM
        </a>
      </h2>
    </div>
  )
}
