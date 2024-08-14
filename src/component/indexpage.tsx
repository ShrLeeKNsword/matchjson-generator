import React from 'react';

const FormSelect = Form.Select;
const Option = FormSelect.Option;
// 普通Input，在<Form></Form>内部使用时，Form不会对其做任何处理
import { CodeHighlight, Col, Row, Card, Typography, Checkbox, Form } from '@douyinfe/semi-ui';

const IndexPage = () => {

    interface MatchData {
        matchGroup?: any;
        matchPhase?: any;
        teamGroup?: any;
        format?: any;
        game?: any;
        map?: any;
        bpRoom?: any;
        defend_teamName?: any;
        defend_matchPoint?: any;
        defend_score?: any;
        attack_teamName?: any;
        attack_matchPoint?: any;
        attack_score?: any;
        defend_players_1_name?: any;
        defend_players_2_name?: any;
        defend_players_3_name?: any;
        defend_players_4_name?: any;
        defend_players_5_name?: any;
        attack_players_1_name?: any;
        attack_players_2_name?: any;
        attack_players_3_name?: any;
        attack_players_4_name?: any;
        attack_players_5_name?: any;
        defend_players_1_character?: any;
        defend_players_2_character?: any;
        defend_players_3_character?: any;
        defend_players_4_character?: any;
        defend_players_5_character?: any;
        attack_players_1_character?: any;
        attack_players_2_character?: any;
        attack_players_3_character?: any;
        attack_players_4_character?: any;
        attack_players_5_character?: any;
        defend_players_1_combatScore?: any;
        defend_players_2_combatScore?: any;
        defend_players_3_combatScore?: any;
        defend_players_4_combatScore?: any;
        defend_players_5_combatScore?: any;
        attack_players_1_combatScore?: any;
        attack_players_2_combatScore?: any;
        attack_players_3_combatScore?: any;
        attack_players_4_combatScore?: any;
        attack_players_5_combatScore?: any;
        defend_players_1_K?: any;
        defend_players_2_K?: any;
        defend_players_3_K?: any;
        defend_players_4_K?: any;
        defend_players_5_K?: any;
        attack_players_1_K?: any;
        attack_players_2_K?: any;
        attack_players_3_K?: any;
        attack_players_4_K?: any;
        attack_players_5_K?: any;
        defend_players_1_D?: any;
        defend_players_2_D?: any;
        defend_players_3_D?: any;
        defend_players_4_D?: any;
        defend_players_5_D?: any;
        attack_players_1_D?: any;
        attack_players_2_D?: any;
        attack_players_3_D?: any;
        attack_players_4_D?: any;
        attack_players_5_D?: any;
        defend_players_1_DMG?: any;
        defend_players_2_DMG?: any;
        defend_players_3_DMG?: any;
        defend_players_4_DMG?: any;
        defend_players_5_DMG?: any;
        attack_players_1_DMG?: any;
        attack_players_2_DMG?: any;
        attack_players_3_DMG?: any;
        attack_players_4_DMG?: any;
        attack_players_5_DMG?: any;
    }

    const [matchData, setMatchData] = React.useState<MatchData>({});
    const [mvp_d_1, setMVP_d_1] = React.useState(false);
    const [mvp_d_2, setMVP_d_2] = React.useState(false);
    const [mvp_d_3, setMVP_d_3] = React.useState(false);
    const [mvp_d_4, setMVP_d_4] = React.useState(false);
    const [mvp_d_5, setMVP_d_5] = React.useState(false);
    const [mvp_a_1, setMVP_a_1] = React.useState(false);
    const [mvp_a_2, setMVP_a_2] = React.useState(false);
    const [mvp_a_3, setMVP_a_3] = React.useState(false);
    const [mvp_a_4, setMVP_a_4] = React.useState(false);
    const [mvp_a_5, setMVP_a_5] = React.useState(false);
    const { Title } = Typography;

    return <>
        <Form render={({}) => (
            <Row style={{ width: "100%" }}>
                <Col span={12}>
                    <div style={{ overflow: 'scroll', maxHeight: '80vh', width: "100%" }}>
                        <Title heading={2} style={{ margin: '8px 0' }} >比赛设置</Title>
                        <Row>
                            <Col span={4}>
                                <Form.Select field="matchGroup" initValue={'淘汰赛'} label={{ text: '比赛组' }} style={{ width: 90 }}>
                                    <Option value="海选赛">海选赛</Option>
                                    <Option value="淘汰赛">淘汰赛</Option>
                                    <Option value="总决赛">总决赛</Option>
                                </Form.Select>
                            </Col>
                            <Col span={5}>
                                <Form.Input field='matchPhase' initValue={'2:0组第一场'} label='比赛阶段' style={{ width: 120 }} />
                            </Col>
                            <Col span={6}>
                                <Form.Input field='teamGroup' initValue={''} label={{ text: '组别', optional: true }} style={{ width: 120 }} />
                            </Col>
                            <Col span={4}>
                                <Form.Select field="format" initValue={'BO3'} label={{ text: '赛制' }} style={{ width: 80 }}>
                                    <Option value="BO1">BO1</Option>
                                    <Option value="BO3">BO3</Option>
                                    <Option value="BO5">BO5</Option>
                                </Form.Select>
                            </Col>
                            <Col span={5}>
                                <Form.Select field="game" initValue={'Game1'} label={{ text: '当前回合' }} style={{ width: 100 }}>
                                    <Option value="Game1">Game1</Option>
                                    <Option value="Game2">Game2</Option>
                                    <Option value="Game3">Game3</Option>
                                    <Option value="Game4">Game4</Option>
                                    <Option value="Game5">Game5</Option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <Form.Select field="map" initValue={'88区'} label={{ text: '地图' }} style={{ width: 120 }}>
                                    <Option value="88区">88区</Option>
                                    <Option value="风曳镇">风曳镇</Option>
                                    <Option value="404基地">404基地</Option>
                                    <Option value="欧拉港口">欧拉港口</Option>
                                    <Option value="空间实验室">空间实验室</Option>
                                    <Option value="柯西街区">柯西街区</Option>
                                </Form.Select>
                            </Col>
                            <Col span={6}>
                                <Form.Input field='bpRoom' initValue={''} label='BP房间号' style={{ width: 400 }} />
                            </Col>
                        </Row>


                        <Title heading={3} style={{ margin: '8px 0' }} >防守方</Title>
                        <Row>
                            <Col span={10}>
                                <Form.Input field='defend_teamName' initValue={''} label='队伍名' style={{ width: 240 }} />
                            </Col>
                            <Col span={5}>
                                <Form.Select field="defend_matchPoint" initValue={'0'} label={{ text: '大局得分' }} style={{ width: 80 }}>
                                    <Option value="0">0</Option>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                </Form.Select>
                            </Col>
                            <Col span={5}>
                                <Form.Select field="defend_score" initValue={'0'} label={{ text: '本局得分' }} style={{ width: 80 }}>
                                    <Option value="0">0</Option>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                    <Option value="7">7</Option>
                                    <Option value="8">8</Option>
                                    <Option value="9">9</Option>
                                    <Option value="10">10</Option>
                                    <Option value="11">11</Option>
                                    <Option value="12">12</Option>
                                    <Option value="13">13</Option>
                                    <Option value="14">14</Option>
                                    <Option value="15">15</Option>
                                    <Option value="16">16</Option>
                                    <Option value="17">17</Option>
                                    <Option value="18">18</Option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={12}>
                                <Card
                                    title='防守 - 队员 1'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='defend_players_1_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="defend_players_1_character" initValue={'米雪儿'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="米雪儿">米雪儿</Option>
                                                <Option value="信">信</Option>
                                                <Option value="心夏">心夏</Option>
                                                <Option value="伊薇特">伊薇特</Option>
                                                <Option value="芙拉薇娅">芙拉薇娅</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_1_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_1_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_1_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_1_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_d_1(!mvp_d_1)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    title='防守 - 队员 2'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='defend_players_2_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="defend_players_2_character" initValue={'米雪儿'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="米雪儿">米雪儿</Option>
                                                <Option value="信">信</Option>
                                                <Option value="心夏">心夏</Option>
                                                <Option value="伊薇特">伊薇特</Option>
                                                <Option value="芙拉薇娅">芙拉薇娅</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_2_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_2_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_2_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_2_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_d_2(!mvp_d_2)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={12}>
                                <Card
                                    title='防守 - 队员 3'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='defend_players_3_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="defend_players_3_character" initValue={'米雪儿'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="米雪儿">米雪儿</Option>
                                                <Option value="信">信</Option>
                                                <Option value="心夏">心夏</Option>
                                                <Option value="伊薇特">伊薇特</Option>
                                                <Option value="芙拉薇娅">芙拉薇娅</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_3_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_3_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_3_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_3_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_d_3(!mvp_d_3)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    title='防守 - 队员 4'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='defend_players_4_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="defend_players_4_character" initValue={'米雪儿'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="米雪儿">米雪儿</Option>
                                                <Option value="信">信</Option>
                                                <Option value="心夏">心夏</Option>
                                                <Option value="伊薇特">伊薇特</Option>
                                                <Option value="芙拉薇娅">芙拉薇娅</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_4_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_4_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_4_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_4_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_d_4(!mvp_d_4)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={12}>
                                <Card
                                    title='防守 - 队员 5'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='defend_players_5_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="defend_players_5_character" initValue={'米雪儿'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="米雪儿">米雪儿</Option>
                                                <Option value="信">信</Option>
                                                <Option value="心夏">心夏</Option>
                                                <Option value="伊薇特">伊薇特</Option>
                                                <Option value="芙拉薇娅">芙拉薇娅</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_5_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='defend_players_5_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_5_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='defend_players_5_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_d_5(!mvp_d_5)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>

                        </Row>


                        <Title heading={3} style={{ margin: '8px 0' }} >进攻方</Title>
                        <Row>
                            <Col span={10}>
                                <Form.Input field='attack_teamName' initValue={''} label='队伍名' style={{ width: 240 }} />
                            </Col>
                            <Col span={5}>
                                <Form.Select field="attack_matchPoint" initValue={'0'} label={{ text: '大局得分' }} style={{ width: 80 }}>
                                    <Option value="0">0</Option>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                </Form.Select>
                            </Col>
                            <Col span={5}>
                                <Form.Select field="attack_score" initValue={'0'} label={{ text: '本局得分' }} style={{ width: 80 }}>
                                    <Option value="0">0</Option>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                    <Option value="7">7</Option>
                                    <Option value="8">8</Option>
                                    <Option value="9">9</Option>
                                    <Option value="10">10</Option>
                                    <Option value="11">11</Option>
                                    <Option value="12">12</Option>
                                    <Option value="13">13</Option>
                                    <Option value="14">14</Option>
                                    <Option value="15">15</Option>
                                    <Option value="16">16</Option>
                                    <Option value="17">17</Option>
                                    <Option value="18">18</Option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={12}>
                                <Card
                                    title='进攻 - 队员 1'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='attack_players_1_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="attack_players_1_character" initValue={'明'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="明">明</Option>
                                                <Option value="拉薇">拉薇</Option>
                                                <Option value="梅瑞狄斯">梅瑞狄斯</Option>
                                                <Option value="香奈美">香奈美</Option>
                                                <Option value="令">令</Option>
                                                <Option value="艾卡">艾卡</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_1_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_1_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_1_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_1_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_a_1(!mvp_a_1)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    title='进攻 - 队员 2'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='attack_players_2_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="attack_players_2_character" initValue={'明'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="明">明</Option>
                                                <Option value="拉薇">拉薇</Option>
                                                <Option value="梅瑞狄斯">梅瑞狄斯</Option>
                                                <Option value="香奈美">香奈美</Option>
                                                <Option value="令">令</Option>
                                                <Option value="艾卡">艾卡</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_2_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_2_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_2_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_2_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_a_2(!mvp_a_2)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={12}>
                                <Card
                                    title='进攻 - 队员 3'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='attack_players_3_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="attack_players_3_character" initValue={'明'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="明">明</Option>
                                                <Option value="拉薇">拉薇</Option>
                                                <Option value="梅瑞狄斯">梅瑞狄斯</Option>
                                                <Option value="香奈美">香奈美</Option>
                                                <Option value="令">令</Option>
                                                <Option value="艾卡">艾卡</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_3_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_3_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_3_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_3_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_a_3(!mvp_a_3)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    title='进攻 - 队员 4'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='attack_players_4_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="attack_players_4_character" initValue={'明'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="明">明</Option>
                                                <Option value="拉薇">拉薇</Option>
                                                <Option value="梅瑞狄斯">梅瑞狄斯</Option>
                                                <Option value="香奈美">香奈美</Option>
                                                <Option value="令">令</Option>
                                                <Option value="艾卡">艾卡</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_4_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_4_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_4_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_4_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_a_4(!mvp_a_4)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col span={12}>
                                <Card
                                    title='进攻 - 队员 5'
                                    style={{ maxWidth: 260 }}
                                >
                                    <Row>
                                        <Col span={10}>
                                            <Form.Input field='attack_players_5_name' initValue={''} label='名称' style={{ width: 220 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Select field="attack_players_5_character" initValue={'明'} label={{ text: '角色' }} style={{ width: 120 }}>
                                                <Option value="明">明</Option>
                                                <Option value="拉薇">拉薇</Option>
                                                <Option value="梅瑞狄斯">梅瑞狄斯</Option>
                                                <Option value="香奈美">香奈美</Option>
                                                <Option value="令">令</Option>
                                                <Option value="艾卡">艾卡</Option>
                                                <Option value="星绘">星绘</Option>
                                                <Option value="奥黛丽">奥黛丽</Option>
                                                <Option value="白墨">白墨</Option>
                                                <Option value="玛德蕾娜">玛德蕾娜</Option>
                                                <Option value="绯莎">绯莎</Option>
                                                <Option value="加拉蒂亚">加拉蒂亚</Option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_5_combatScore' initValue={''} label='评分' style={{ width: 80 }} />
                                        </Col>
                                        <Col span={12}>
                                            <Form.Input field='attack_players_5_DMG' initValue={''} label='伤害' style={{ width: 80 }} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_5_K' initValue={''} label='K' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8}>
                                            <Form.Input field='attack_players_5_D' initValue={''} label='D' style={{ width: 60 }} />
                                        </Col>
                                        <Col span={8} style={{ marginTop: '30px' }}>
                                            <Checkbox onChange={() => setMVP_a_5(!mvp_a_5)} aria-label="MVP">MVP</Checkbox>
                                        </Col>
                                    </Row>

                                </Card>
                            </Col>

                        </Row>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{ overflow: 'scroll', maxHeight: '80vh', width: "100%" }}>
                        <CodeHighlight
                            language={"json"}
                            code={`{
    "matchInfo":{
        "matchGroup":"${matchData.matchGroup}",
        "matchPhase":"${matchData.matchPhase}",
        "teamGroup":"${matchData.teamGroup == undefined ? "" : matchData.teamGroup}",
        "format":"${matchData.format}",
        "game":"${matchData.game}",
        "map":"${matchData.map}",
        "bpRoom":"${matchData.bpRoom}"
    },
    "defend":{
        "teamName":"${matchData.defend_teamName}",
        "matchPoint":${matchData.defend_matchPoint},
        "score":${matchData.defend_score},
        "players":[
            {
                "name":"${matchData.defend_players_1_name}",
                "character":"${matchData.defend_players_1_character}",
                "combatScore":${matchData.defend_players_1_combatScore},
                "K":${matchData.defend_players_1_K},
                "D":${matchData.defend_players_1_D},
                "DMG":${matchData.defend_players_1_DMG},
                "mvp":${mvp_d_1}
            },
            {
                "name":"${matchData.defend_players_2_name}",
                "character":"${matchData.defend_players_2_character}",
                "combatScore":${matchData.defend_players_2_combatScore},
                "K":${matchData.defend_players_2_K},
                "D":${matchData.defend_players_2_D},
                "DMG":${matchData.defend_players_2_DMG},
                "mvp":${mvp_d_2}
            },
            {
                "name":"${matchData.defend_players_3_name}",
                "character":"${matchData.defend_players_3_character}",
                "combatScore":${matchData.defend_players_3_combatScore},
                "K":${matchData.defend_players_3_K},
                "D":${matchData.defend_players_3_D},
                "DMG":${matchData.defend_players_3_DMG},
                "mvp":${mvp_d_3}
            },
            {
                "name":"${matchData.defend_players_4_name}",
                "character":"${matchData.defend_players_4_character}",
                "combatScore":${matchData.defend_players_4_combatScore},
                "K":${matchData.defend_players_4_K},
                "D":${matchData.defend_players_4_D},
                "DMG":${matchData.defend_players_4_DMG},
                "mvp":${mvp_d_4}
            },
            {
                "name":"${matchData.defend_players_5_name}",
                "character":"${matchData.defend_players_5_character}",
                "combatScore":${matchData.defend_players_5_combatScore},
                "K":${matchData.defend_players_5_K},
                "D":${matchData.defend_players_5_D},
                "DMG":${matchData.defend_players_5_DMG},
                "mvp":${mvp_d_5}
            }
        ]
    },
    "attack":{
        "teamName":"${matchData.attack_teamName}",
        "matchPoint":${matchData.attack_matchPoint},
        "score":${matchData.attack_score},
        "players":[
            {
                "name":"${matchData.attack_players_1_name}",
                "character":"${matchData.attack_players_1_character}",
                "combatScore":${matchData.attack_players_1_combatScore},
                "K":${matchData.attack_players_1_K},
                "D":${matchData.attack_players_1_D},
                "DMG":${matchData.attack_players_1_DMG},
                "mvp":${mvp_a_1}
            },
            {
                "name":"${matchData.attack_players_2_name}",
                "character":"${matchData.attack_players_2_character}",
                "combatScore":${matchData.attack_players_2_combatScore},
                "K":${matchData.attack_players_2_K},
                "D":${matchData.attack_players_2_D},
                "DMG":${matchData.attack_players_2_DMG},
                "mvp":${mvp_a_2}
            },
            {
                "name":"${matchData.attack_players_3_name}",
                "character":"${matchData.attack_players_3_character}",
                "combatScore":${matchData.attack_players_3_combatScore},
                "K":${matchData.attack_players_3_K},
                "D":${matchData.attack_players_3_D},
                "DMG":${matchData.attack_players_3_DMG},
                "mvp":${mvp_a_3}
            },
            {
                "name":"${matchData.attack_players_4_name}",
                "character":"${matchData.attack_players_4_character}",
                "combatScore":${matchData.attack_players_4_combatScore},
                "K":${matchData.attack_players_4_K},
                "D":${matchData.attack_players_4_D},
                "DMG":${matchData.attack_players_4_DMG},
                "mvp":${mvp_a_4}
            },
            {
                "name":"${matchData.attack_players_5_name}",
                "character":"${matchData.attack_players_5_character}",
                "combatScore":${matchData.attack_players_5_combatScore},
                "K":${matchData.attack_players_5_K},
                "D":${matchData.attack_players_5_D},
                "DMG":${matchData.attack_players_5_DMG},
                "mvp":${mvp_a_5}
            }
        ]
    }
}`
                            }
                        />
                    </div>
                </Col>

            </Row>
        )} layout='horizontal' onValueChange={values => setMatchData(values)}>
        </Form>
    </>
}

export default IndexPage;