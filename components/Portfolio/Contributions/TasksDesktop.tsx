import React from "react";
import {Avatar, Button, Col, Row, Typography} from "antd";
import {TasksComponentProps} from "../interfaces";

const TasksDesktop = ({tasks, openTaskDetail}: TasksComponentProps) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Row
                  key={index} gutter={[10, 0]}
                  justify="space-between"
                  style={{height: 65, margin: '20px 35px', borderBottom: '1px solid #E7E7E7'}}
                >
                    <Col>
                        <Row gutter={[15, 0]}>
                            <Col>
                                <Row align="middle">
                                    <Avatar size={35} shape="circle" src={task.product.avatar}/>
                                </Row>
                            </Col>
                            <Col style={{maxWidth: '500px'}}>
                                <Row>
                                    <Row align="top">
                                        <Typography.Text strong style={{
                                            fontSize: 14,
                                            fontFamily: "Roboto",
                                        }}>{task.title}</Typography.Text>
                                    </Row>
                                    <Row align="bottom" justify="space-between">
                                        {task.skills && task.skills.map((skill) => (<Col>
                                            <Typography.Text style={{fontSize: 12, fontFamily: "Roboto"}}>
                                                {skill.category} {skill.expertise ? `$(${skill.expertise})` : null}
                                            </Typography.Text>
                                        </Col>))}
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{marginLeft: 30}}>
                        <Row justify="end" align="top">
                            <Typography.Text style={{
                                fontSize: 14,
                                fontFamily: "Roboto",
                                color: "rgba(0, 0, 0, 0.45)",
                                marginRight: 9
                            }}>
                                {task.date} days ago
                            </Typography.Text>
                        </Row>
                        <Row justify="end" align="bottom">
                            <Button style={{
                                padding: 0,
                                border: "none"
                            }} onClick={() => openTaskDetail(index)}>
                                <Typography.Text style={{
                                    textDecoration: "underline #1D1D1B",
                                    color: "#1D1D1B",
                                    fontSize: 14,
                                    fontFamily: "Roboto",
                                }}>View Delivery Details</Typography.Text></Button>
                        </Row>
                    </Col>
                </Row>
            ))}
        </>);
}

export default TasksDesktop;
