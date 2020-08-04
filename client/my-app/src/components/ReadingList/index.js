import React, { FC, useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../SearchBar";
import APIClient from "../../clients/apiClient"

import "antd/dist/antd.css";
import { Table, Input, Tag, InputNumber, Popconfirm, Form } from "antd";
import { Drawer, Button, Col, Row, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const originData = [];
for (let i = 0; i < 1; i++) {
    originData.push({
        key: i.toString(),
        title: `Today I announced that`,
        outlet: "Twitter",
        author: "Eric Garcetti"
    })
    originData.push({
        key: (i + 1).toString(),
        title: `How coronvirus is impacting LA hospitals`,
        outlet: "LA Times",
        author: "Anon"
    })
    originData.push({
        key: (i + 2).toString(),
        title: `Teacher's warn against returning to school in the fall`,
        outlet: "CBS LA",
        author: "Anon"
    })
}


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};
const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState("");
    const [visibleDrawer, setVisibleDrawer] = useState(false);
    const apiClient = new APIClient();
    const [reads, setReads] = useState([])

    const [addNoteDrawer, setAddNoteDrawer] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         // console.log(posts);
    //         // get content 
    //         apiClient.getStarred().then((data) => {
    //             data.map((read))
    //         })
    //         apiClient.getNotes().then((data) => {
    //             data.map((note) => {
    //                 posts.push({
    //                     id: note.id,
    //                     text: note.text,
    //                     type: note.type,
    //                     source: note.source,
    //                     author: note.author,
    //                     period: note.period,
    //                 })
    //                 console.log(note.text)
    //                 setPosts(posts)
    //                 console.log(posts)
    //             }
    //             );

    //         });
    //     }, 0);
    // }, posts); // useEffect, need to return what you set

    const onCheck = (selected) => {
        const newReads = [...reads, selected]
        setReads(newReads)
    }

    const showDrawer = () => {
        setVisibleDrawer(true);
    };
    const addNote = () => {
        setAddNoteDrawer(true)
    }

    const closeNote = () => {
        setAddNoteDrawer(false)
    }

    const onClose = () => {
        setVisibleDrawer(false);
    };

    const [posts, setPosts] = useState([]);

    const isEditing = (record) => record.key === editingKey;

    // const edit = (record) => {
    //   form.setFieldsValue({
    //     text: "",
    //     type: "",
    //     source: "",
    //     author: "",
    //     period: "",
    //     ...record,
    //   });
    //   setEditingKey(record.key);
    // };
    const edit = () => { };

    const cancel = () => {
        setEditingKey("");
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();

            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    const columns = [
        // {
        //     title: "Note",
        //     key: "text",
        //     dataIndex: "text",
        //     width: "25%",
        //     editable: true,
        // },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            width: "10%",
            editable: true
        },
        {
            title: "Outlet",
            key: "outlet",
            dataIndex: "outlet",
            width: "10%",
            editable: true,
            filters: [
                {
                    text: "Twitter",
                    value: "Twitter",
                },
                {
                    text: "Google News",
                    value: "Google News",
                },

            ],
            render: (tag) => (
                <span>
                    {
                        <Tag color={"geekblue"} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    }
                </span>
            ),
            onFilter: (value, record) => record.outlet.includes(value),
        },
        {
            title: "Author",
            dataIndex: "author",
            key: "1",
            width: "10%",
            editable: true
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === "age" ? "number" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const HandleAdd = () => {
        addNote()
        // const [dataSource, setDataSource] = useState({})
        const newData = {
            key: '1',
            text: `Note`,
            type: "correspondence",
            source: "analyst",
            author: "vicki",
            period: "2019",
        };
        setData([...data, newData]);
        // SketchOutlined(count + 1)
    };
    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            onCheck(selectedRows)
        },
        // getCheckboxProps: record => ({
        //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //     name: record.name,
        // }),
    };
    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <>
            {/* <div>
        {posts.map((note, index) => (<p>{note.text}</p>))}
      </div> */}
            <Form form={form} component={false}>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.text}</p>,
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    scroll={{ x: 1000, y: 300 }}
                />
            </Form>
        </>
    );
};


const NotesTable = (props) => {
    return (
        <>
            <SearchBar history={props.history} />
            <div class="inner-container top-50">
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper
                            // className={classes.paper}
                            elevation={3}
                            style={{ padding: "0" }}
                        >
                            <Grid
                                container
                                spacing={2}
                                style={{ display: "flex", alignItems: "stretch" }}
                            >
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>

                                        <Grid item xs>
                                            <Button shape='circle' icon={<PlusOutlined />} onClick={() => alert("trigger add to database")} />
                                            <EditableTable />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}

export default NotesTable;
