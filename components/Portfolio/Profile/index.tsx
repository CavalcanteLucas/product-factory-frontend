import React, {useEffect} from "react";
import {EditOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Col, Divider, Row, Typography} from "antd";
import {ProfileProps} from "../interfaces";
import {useRouter} from "next/router";
import {connect} from "react-redux";
import {apiDomain} from "../../../utilities/constants";

const Profile = ({profile, user, refetchProfile}: ProfileProps) => {
    const router = useRouter();
    const {personSlug} = router.query;
    const isCurrentUser = (id: string) => {
        return user.id === id;
    }

    useEffect(() => {
        refetchProfile({personSlug});
    }, []);

    return (
        <div style={{
            border: " 1px solid #E7E7E7",
            borderRadius: 15,
            padding: 14,
            width: 300,
            marginRight: 10,
            marginBottom: 20,
            height: "max-content"
        }}>
            <Row style={{position: 'relative'}}>
                <Col style={{width: '100%'}}>
                    <Row justify="center">
                        <Avatar size={100} icon={<UserOutlined/>} src={apiDomain + profile.avatar}/>
                    </Row>
                </Col>
                <Col style={{position: 'absolute', right: 0}}>
                    <Row justify={"end"}>
                        {
                            isCurrentUser(profile.id) &&
                            <Button style={{border: "none"}}
                                    size={"large"}
                                    shape="circle"
                                    onClick={() => router.push(`/${personSlug}/edit`)}
                                    icon={<EditOutlined/>}
                            />
                        }
                    </Row>
                </Col>
            </Row>
            <div style={{padding: 14}}>
                <Row>
                    <Typography.Text strong style={{
                        color: "#262626",
                        fontSize: 20,
                        fontFamily: "Roboto"
                    }}>{profile.firstName}</Typography.Text>
                </Row>
                <Row>
                    <Typography.Text style={{
                        color: "#595959",
                        fontSize: 12,
                        fontFamily: "Roboto"
                    }}>@{profile.slug}</Typography.Text>
                </Row>
                <Row>
                    <Typography.Text style={{
                        maxWidth: 232,
                        color: "#595959"
                    }}
                    >{profile.bio}</Typography.Text>
                </Row>
                <Row><Divider/></Row>
                {profile.skills.length > 0 && (<Row justify={"start"}>
                    <Col>
                        <Row><Typography.Text strong
                                              style={{
                                                  fontSize: 14,
                                                  fontFamily: "SF Pro Display",
                                                  color: "#262626"
                                              }}>Skills</Typography.Text></Row>
                        {profile.skills.map(skill => (
                            <Row justify={"start"}
                                 style={{marginBottom: 3, padding: "5px 16px", borderRadius: 2, background: "#F5F5F5"}}>
                                {skill.category[0]} {`->`} {skill.category[1]} {skill.expertise ? `(${skill.expertise})` : null}
                            </Row>
                        ))}</Col>
                </Row>)}
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    user: state.user
});

export default connect(mapStateToProps, null)(Profile);
