import React from "react";
import {Button, Row, Typography} from "antd";
import {SecondStepProps} from "../interfaces";
import {LeftOutlined} from "@ant-design/icons";
import SkillsSelect from "../Skills/SkillsSelect";
import ExpertiseTable from "../Skills/ExpertiseTable";

const SecondStep = ({
                        previous,
                        submit,
                        allCategories,
                        setSkills,
                        skillExpertise,
                        setSkillExpertise,
                        skills
                    }: SecondStepProps) => {

    const finish = () => {
        submit();
    }

    return (
        <>
            <Row>
                <Typography.Text style={{fontSize: 15, marginBottom: 15}}>Select your skills
                    (required)</Typography.Text>
            </Row>
            <Row>
                <Typography.Text style={{fontSize: 8, marginBottom: 25}}>These skills are featured on your profile and
                    can also be used to match you with
                    tasks.</Typography.Text>
            </Row>
            <Row justify={"center"} style={{marginBottom: 50}}>
                <SkillsSelect setSkills={setSkills}
                              allCategories={allCategories}
                              skillExpertise={skillExpertise}
                              setSkillExpertise={setSkillExpertise}
                              skills={skills}
                />
            </Row>
            <Row>
                <Typography.Text style={{fontSize: 15, marginBottom: 15}}>Specify expertise
                    (recommended)</Typography.Text>
            </Row>
            <Row style={{marginBottom: 20}}>
                <Typography.Text style={{fontSize: 8, marginBottom: 25}}>These skills are featured on your profile and
                    can also be used to match you with
                    tasks.</Typography.Text>
            </Row>
            <Row style={{marginBottom: 35}}>
                <ExpertiseTable skillExpertise={skillExpertise} setSkills={setSkills} skills={skills}/>
            </Row>
            <Row justify={"space-between"}>
                <Button style={{border: "none"}} icon={<LeftOutlined/>} onClick={() => previous(0)}
                        size="middle">Previous</Button>
                <Button onClick={finish} size="middle" type="primary">Finish</Button>
            </Row>
        </>
    )
}

export default SecondStep;