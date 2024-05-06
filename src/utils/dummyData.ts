import { FormatType, ShadowChartMetaData, ShadowMenu, ShadowSalesTreeMetaData, ShadowTreeNode } from "shadow-ui-react";

export const dummySalesTreeData: ShadowSalesTreeMetaData[] = [
  {
    expanded: true,
    children: [
      {
        branchLabel: "TOTAL SALES",
        expanded: true,
        nodeDetail: {
          label: "-48700",
          direction: "Decline",

          format: {
            type: "currency",
            outputFormat: "",
          },
          leftPanel: {
            label: "$11.5M",
            format: {
              type: "",
              outputFormat: "",
            },
          },
          rightPanel: {
            label: "-0.42%",
            yoyDirection: "down",
            format: {
              type: "",
              outputFormat: "",
            },
          },
        },
        children: [
          {
            branchLabel: "TRIPS",
            expanded: true,
            nodeDetail: {
              label: "-$909k",
              direction: "Decline",

              leftPanel: {
                label: "$1.80M",

                format: {
                  type: "",
                  outputFormat: "",
                },
              },
              rightPanel: {
                label: "-7.6%",
                yoyDirection: "down",

                format: {
                  type: "",
                  outputFormat: "",
                },
              },
            },
            children: [
              {
                branchLabel: "RETAILER TRIPS",
                expanded: true,
                nodeDetail: {
                  label: "$356k",
                  direction: "Growth",

                  leftPanel: {
                    label: "$47.3M",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                  rightPanel: {
                    label: "3.2%",
                    yoyDirection: "up",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                },
              },
              {
                branchLabel: "CATEGORY TRIP PENETRATION",
                expanded: false,
                nodeDetail: {
                  label: "-$1.26M",
                  direction: "Decline",
                  type: "Primary",
                  leftPanel: {
                    label: "$3.8M",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                  rightPanel: {
                    label: "-10.5%",
                    yoyDirection: "down",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                },
                children: [
                  {
                    branchLabel: "HOUSEHOLD BEHAVIOR BEHIND CHANGE",
                    expanded: true,
                    children: [
                      {
                        branchLabel: "HOUSEHOLD PENETRATION",
                        nodeDetail: {
                          label: "-$1.22M",
                          direction: "Decline",

                          type: "Secondary",
                          leftPanel: {
                            label: "18%",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "-11.2%",
                            yoyDirection: "down",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                      {
                        branchLabel: "TRIPS PER HOUSEHOLD",
                        nodeDetail: {
                          label: "-$38.3k",
                          direction: "Growth",

                          leftPanel: {
                            label: "2.62",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "0.53%",
                            yoyDirection: "up",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                      {
                        branchLabel: "NON CARDED TRIP PENETRATION",
                        nodeDetail: {
                          label: "-$85.0k",
                          direction: "Decline",

                          leftPanel: {
                            label: "2%",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "-7.4%",
                            yoyDirection: "down",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                    ],
                  },
                  {
                    branchLabel: "HOUSEHOLD BEHIND TRIP PENETRATION",
                    expanded: true,
                    children: [
                      {
                        branchLabel: "PRICE DRIVEN",
                        nodeDetail: {
                          label: "-$229k",
                          direction: "Decline",

                          leftPanel: {
                            label: "2.8%",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "-8.8%",
                            yoyDirection: "down",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                      {
                        branchLabel: "PRICE NEUTRAL",
                        nodeDetail: {
                          label: "-$240k",
                          direction: "Decline",

                          leftPanel: {
                            label: "3.5%",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "-9.5%",
                            yoyDirection: "down",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                      {
                        branchLabel: "QUALITY DRIVEN",
                        nodeDetail: {
                          label: "-$795k",
                          direction: "Decline",

                          leftPanel: {
                            label: "4.5%",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "-10.5%",
                            yoyDirection: "down",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            branchLabel: "$ PER TRIP",
            expanded: true,
            nodeDetail: {
              label: "$860k",
              direction: "Growth",

              format: {
                type: "",
                outputFormat: "",
              },
              leftPanel: {
                label: "$6.37",

                format: {
                  type: "",
                  outputFormat: "",
                },
              },
              rightPanel: {
                label: "7.7%",

                yoyDirection: "up",

                format: {
                  type: "",
                  outputFormat: "",
                },
              },
            },
            children: [
              {
                branchLabel: "UNITS PER TRIP",
                expanded: false,
                nodeDetail: {
                  label: "-$102k",
                  direction: "Decline",

                  leftPanel: {
                    label: "1.32",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                  rightPanel: {
                    label: "-0.85%",

                    yoyDirection: "down",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                },
                children: [
                  {
                    branchLabel: "BREADTH ACROSS CATEGORIES",
                    expanded: true,
                    nodeDetail: {
                      label: "-$26.7k",
                      direction: "Decline",

                      leftPanel: {
                        label: "1.04",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                      rightPanel: {
                        label: "-0.22%",

                        yoyDirection: "down",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                    },
                  },
                  {
                    branchLabel: "DEPTH WITHIN CATEGORIES",
                    expanded: true,
                    nodeDetail: {
                      label: "-$75.2k",
                      direction: "Decline",

                      leftPanel: {
                        label: "1.27",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                      rightPanel: {
                        label: "-0.63%",

                        yoyDirection: "down",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                    },
                  },
                ],
              },
              {
                branchLabel: "AVERAGE ITEM VALUE",
                expanded: false,
                nodeDetail: {
                  label: "$962k",
                  direction: "Growth",

                  leftPanel: {
                    label: "$4.81",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                  rightPanel: {
                    label: "8.7%",

                    yoyDirection: "up",

                    format: {
                      type: "",
                      outputFormat: "",
                    },
                  },
                },
                children: [
                  {
                    branchLabel: "NET PRICE*",
                    expanded: true,
                    nodeDetail: {
                      label: "$807k",
                      direction: "Growth",

                      leftPanel: {
                        label: "$4.82",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                      rightPanel: {
                        label: "7.2%",

                        yoyDirection: "up",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                    },
                    children: [
                      {
                        branchLabel: "BASE PRICE*",
                        nodeDetail: {
                          label: "$1.14M",
                          direction: "Growth",

                          leftPanel: {
                            label: "$5.15",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "9.7%",

                            yoyDirection: "up",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                      {
                        branchLabel: "PROMO DISCOUNT*",
                        nodeDetail: {
                          label: "$330k",
                          direction: "Decline",

                          leftPanel: {
                            label: "$0.33",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "67.2%",

                            yoyDirection: "up",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                    ],
                  },
                  {
                    branchLabel: "MIX",
                    expanded: true,
                    nodeDetail: {
                      label: "$155k",
                      direction: "Growth",

                      leftPanel: {
                        label: "NA",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                      rightPanel: {
                        label: "1.4%",

                        yoyDirection: "up",

                        format: {
                          type: "",
                          outputFormat: "",
                        },
                      },
                    },
                    children: [
                      {
                        branchLabel: "NEW/DISCONTINUED",
                        nodeDetail: {
                          label: "-$18.5k",
                          direction: "Decline",

                          leftPanel: {
                            label: "NA",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "-0.17%",

                            yoyDirection: "down",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                      {
                        branchLabel: "EXISTING",
                        nodeDetail: {
                          label: "$174k",
                          direction: "Growth",

                          leftPanel: {
                            label: "NA",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                          rightPanel: {
                            label: "1.6%",

                            yoyDirection: "up",

                            format: {
                              type: "",
                              outputFormat: "",
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        branchLabel: "TOTAL UNITS",
        expanded: false,
        children: [],

        nodeDetail: {
          label: "$10.1M",
          direction: "Decline",

          leftPanel: {
            label: "$110M",

            format: {
              type: "",
              outputFormat: "",
            },
          },
          rightPanel: {
            label: "10%",

            format: {
              type: "",
              outputFormat: "",
            },
          },
        },
      },
    ],
  },
];

export const cindeChartData: ShadowChartMetaData = {
  updateFlag: false,
  chart: {
    type: "area",
  },
  series: [
    {
      name: "$ Net Sales TY",
      data: [
        [1655577000000, 5450668180.58],
        [1657996200000, 5385992958.91],
        [1660415400000, 5439009785.18],
        [1662834600000, 5143088255.65],
        [1665253800000, 5440741417.91],
        [1667673000000, 5739518478.61],
        [1670092200000, 5575064169.94],
        [1672511400000, 5312106427.37],
        [1674930600000, 5935021784.63],
        [1677349800000, 5276704995.46],
        [1679769000000, 5595221717.09],
        [1682188200000, 5565843613.6],
        [1684607400000, 5471191962.81],
      ],
    },
    {
      name: "$ Net Sales LY",
      data: [
        [1655577000000, 4450668180.58],
        [1657996200000, 4385992958.91],
        [1660415400000, 4439009785.18],
        [1662834600000, 4143088255.65],
        [1665253800000, 3440741417.91],
        [1667673000000, 4739518478.61],
        [1670092200000, 3575064169.94],
        [1672511400000, 4312106427.37],
        [1674930600000, 4935021784.63],
        [1677349800000, 6276704995.46],
        [1679769000000, 3595221717.09],
        [1682188200000, 6565843613.6],
        [1684607400000, 5071191962.81],
      ],
    },
    {
      name: "$ Net Sales Change",
      data: [
        [1655577000000, 6450668180.58],
        [1657996200000, 3385992958.91],
        [1660415400000, 4439009785.18],
        [1662834600000, 1143088255.65],
        [1665253800000, 3440741417.91],
        [1667673000000, 6739518478.61],
        [1670092200000, 5575064169.94],
        [1672511400000, 1312106427.37],
        [1674930600000, 4935021784.63],
        [1677349800000, 4276704995.46],
        [1679769000000, 4595221717.09],
        [1682188200000, 6565843613.6],
        [1684607400000, 7471191962.81],
      ],
    },
  ],
  title: {
    text: "Sales Trend",
  },
  xAxis: {
    type: "datetime",
  },
};

export const breadcrumbData = [
  {
    text: "Home bigger value test with wrap and withou ellipsis Home bigger value test with wrap and withou ellipsis Home bigger value test with wrap and withou ellipsis",
    isEditable: false,
    routeLink: "/",
  },
  { text: "Card", isEditable: false, routeLink: "/card" },
  { text: "Tooltip", isEditable: false, routeLink: "/tooltip" },
  { text: "Chart", isEditable: false, routeLink: "/chart" },
  { text: "Boards", isEditable: false, routeLink: "/" },
  { text: "Fourth Link", isEditable: true, routeLink: "/" },
];

export const dummyColumnsDef = [
  {
    key: "name",
    columnName: "Name",
    sortable:true,
    dataNodeName: "reportName",
    useTemplate: true,
    width: "40%",
  },
  {
    key: "creator",
    columnName: "Creator",
    
    dataNodeName: "createdUserEmail",
  },
  {
    key: "lastUpdated",
    columnName: "Last Updated",
    dataNodeName: "lastActivityDate",
    format: { type: FormatType.DATE, outputFormat: "MMMM/dd/yyyy" },
  },
  {
    key: "action",
    columnName: "Actions",
    useTemplate: true,
    width: "15%",
    align: "center",
  },
];

export const dummyTableData = [
  {
    reportId: "318ea05d-f422-475b-8c0c-365d0a20122c",
    reportName: "2023-06-12 18:06",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-12T12:36:44.613Z",
  },
  {
    reportId: "548b395b-33d3-493a-83c2-3d91918e1f71",
    reportName: "2023-06-12 15:18",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-12T09:49:19.553Z",
  },
  {
    reportId: "50c1ba66-18a8-43aa-9d97-27ed1d7bda12",
    reportName: "2023-06-09 20:16 (2)",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-09T15:38:40.85Z",
  },
  {
    reportId: "74e3c99e-6fea-403f-ae7d-68fd528c4b23",
    reportName: "2023-06-09 21:06",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-09T15:38:07.837Z",
  },
  {
    reportId: "8bcb6c5b-6dc9-4918-b911-424e2dc111da",
    reportName: "2023-06-09 18:40",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-09T14:46:30.567Z",
  },
  {
    reportId: "fb34fbfe-c053-4779-89e5-63fee82dde48",
    reportName: "2023-06-02 11:58",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-09T09:32:09.753Z",
  },
  {
    reportId: "950b863b-426c-40ae-9ad4-746a7515d830",
    reportName: "2023-06-08 16:04",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-08T10:35:51.233Z",
  },
  {
    reportId: "54693f39-2ea5-40d5-b9d9-08d5dd6f3439",
    reportName: "2023-06-05 11:45",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-05T06:17:01.84Z",
  },
  {
    reportId: "d706aa6b-a9f5-472a-98e7-be86b1d8cb69",
    reportName: "2023-06-01 19:45",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-01T14:15:42.663Z",
  },
  {
    reportId: "68bd90c5-8b2d-415d-9951-faad16c38191",
    reportName: "2023-06-01 19:42",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-01T14:13:05.3Z",
  },
  {
    reportId: "7a5e5443-c999-453e-8a02-065395c9da8b",
    reportName: "2023-06-01 18:49",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-01T13:20:35.327Z",
  },
  {
    reportId: "276b4a6d-7455-4637-8652-803136ac6659",
    reportName: "2023-06-01 18:46",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-06-01T13:17:24.23Z",
  },
  {
    reportId: "06e99abf-4a9f-4351-9f16-71fdd9cf85b5",
    reportName: "2023-05-31 21:22",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T15:53:04.637Z",
  },
  {
    reportId: "cf1391d4-660d-4462-a32b-ddc15e3ab919",
    reportName: "2023-05-31 21:21",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T15:52:00.507Z",
  },
  {
    reportId: "980abcb9-3b59-4c1e-929a-7cb90128fb17",
    reportName: "2023-05-31 19:34",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T14:05:11.053Z",
  },
  {
    reportId: "0906ecc9-0ee4-4626-a3f1-70a9fb27da78",
    reportName: "2023-05-31 18:10",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T12:40:26.213Z",
  },
  {
    reportId: "a7afaf18-8d26-408f-adad-ddaa25852517",
    reportName: "2023-05-31 17:22",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T11:52:43.757Z",
  },
  {
    reportId: "b9f45b8f-04a7-471f-9edd-25deab15386d",
    reportName: "2023-05-31 15:25",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T09:56:15.327Z",
  },
  {
    reportId: "474f3ad5-3df0-4798-bb47-452c5f7d3cec",
    reportName: "2023-05-31 12:44",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T07:14:36.27Z",
  },
  {
    reportId: "6deafd2c-65f8-464c-882f-e613a1a854c8",
    reportName: "2023-05-31 12:24",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-31T06:57:01.787Z",
  },
  {
    reportId: "659afae4-77f0-4904-be8b-1c355bafa123",
    reportName: "2023-05-30 18:13",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-30T12:43:45.2Z",
  },
  {
    reportId: "128a9d0c-c968-4d49-89f0-1c689b4fd4bc",
    reportName: "2023-05-30 12:27",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-30T07:01:55.383Z",
  },
  {
    reportId: "d239c23e-f4ad-4e89-b819-a64bd7544fb5",
    reportName: "2023-05-30 12:26",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-30T06:57:14.703Z",
  },
  {
    reportId: "59c3215e-d4df-47be-85e9-1310fead9a3a",
    reportName: "2023-05-30 12:10",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-30T06:41:06.653Z",
  },
  {
    reportId: "95df44d8-209d-4d5f-b651-f833b33218d5",
    reportName: "2023-05-30 10:52",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-30T06:40:34.637Z",
  },
  {
    reportId: "e779bfb3-0755-4214-8a3e-3ea405d47ca9",
    reportName: "2023-05-29 11:16",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-29T05:46:29.183Z",
  },
  {
    reportId: "92149684-d816-454f-b512-9fa7576cc745",
    reportName: "2023-05-26 19:43",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-26T14:13:18.713Z",
  },
  {
    reportId: "4086a384-b4e5-4ddf-af73-9b0805b01063",
    reportName: "2023-05-26 19:38",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-26T14:11:10.213Z",
  },
  {
    reportId: "1768496a-e69c-44f0-b7ed-c746f2febb55",
    reportName: "2023-05-26 16:09",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-26T11:30:17.497Z",
  },
  {
    reportId: "b776d7c5-745e-4bcc-acbb-b9b0b4f8375d",
    reportName: "2023-05-26 12:43",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-26T07:15:10.983Z",
  },
  {
    reportId: "f33aa900-8425-4ff8-af6e-6bce6d06f533",
    reportName: "2023-05-25 19:51",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-25T14:24:31.073Z",
  },
  {
    reportId: "61c81ebb-169e-4426-9d8a-ae844f8cae7d",
    reportName: "2023-05-25 12:37",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-25T07:37:02.52Z",
  },
  {
    reportId: "daf8285d-48c0-4f0f-b337-53b7592df456",
    reportName: "2023-05-25 11:39",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-25T06:10:40.313Z",
  },
  {
    reportId: "ad4acb30-418d-4960-b3f5-2567496fcc8a",
    reportName: "2023-05-25 11:07",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-25T05:37:46.71Z",
  },
  {
    reportId: "d58458c9-84cb-4e0a-8a57-9c495266625f",
    reportName: "2023-05-25 11:01",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-25T05:31:53.723Z",
  },
  {
    reportId: "3279bec2-46c2-4a2a-b38f-946ffc1d8481",
    reportName: "2023-05-25 10:55",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-25T05:26:00.093Z",
  },
  {
    reportId: "aa28afcc-56ef-45a7-8c62-00e10e6cb544",
    reportName: "2023-05-22 18:21",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-22T12:52:18.033Z",
  },
  {
    reportId: "bd4b928a-2b86-4758-a2f7-5439fcbc11fc",
    reportName: "2023-05-22 15:17",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-22T09:48:19.77Z",
  },
  {
    reportId: "82951002-73f4-49a2-8266-d1dd61647810",
    reportName: "2023-05-22 13:45",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-22T09:41:09.097Z",
  },
  {
    reportId: "0a48f5d0-6496-45f3-b52a-33134028c699",
    reportName: "2023-05-22 13:32",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-22T08:02:54.953Z",
  },
  {
    reportId: "6421fab3-cfbe-4f3a-8269-91f96c59c4cd",
    reportName: "2023-05-22 13:16",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-22T07:47:24.653Z",
  },
  {
    reportId: "ec7fe567-73eb-4e1e-bf60-173c1e2c38c8",
    reportName: "2023-05-22 12:54",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-22T07:29:09.8Z",
  },
  {
    reportId: "62d83a77-47d7-4b9f-988d-f255eb348cb5",
    reportName: "2023-05-19 17:00",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-19T11:34:39.047Z",
  },
  {
    reportId: "0e6c8cb0-0a69-4de3-a645-76e1ef71b025",
    reportName: "2023-05-19 15:32",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-19T10:04:00.847Z",
  },
  {
    reportId: "d8aff2a9-4e5d-4ee3-9ad8-d87cc7f25294",
    reportName: "2023-05-19 14:24",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-19T08:56:18.453Z",
  },
  {
    reportId: "13b4b34a-0906-4348-afd0-be136e512a6f",
    reportName: "2023-05-18 16:50",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-18T11:20:59.98Z",
  },
  {
    reportId: "a8bed4f9-3786-4540-8d3e-50aa6032b12a",
    reportName: "2023-05-18 16:03",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-18T11:17:13.62Z",
  },
  {
    reportId: "03dc7288-2233-4cf0-967d-93aad3bc7405",
    reportName: "2023-05-18 12:52",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-18T07:24:09.883Z",
  },
  {
    reportId: "92faf5c7-93db-405a-a169-b0274ff810bb",
    reportName: "2023-05-17 12:21",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-17T06:52:25.207Z",
  },
  {
    reportId: "d81f1eaf-a2ba-48ec-8be0-efc6fdbaf88e",
    reportName: "2023-05-17 12:20",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-17T06:51:32.38Z",
  },
  {
    reportId: "fcdbbe2e-3fff-417b-b446-c026b3358611",
    reportName: "2023-05-17 11:55",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-17T06:31:01.473Z",
  },
  {
    reportId: "56850c02-c644-494b-80d0-2dffd89f8157",
    reportName: "2023-05-09 19:37",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-17T06:24:41.643Z",
  },
  {
    reportId: "de4ba4bd-726f-4c89-9b07-18c0f4b98129",
    reportName: "2023-05-17 11:37",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-17T06:23:12.017Z",
  },
  {
    reportId: "1f9a0f13-066d-4e50-900a-61aa178eceb6",
    reportName: "2023-05-14 17:10",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-15T10:37:14.577Z",
  },
  {
    reportId: "ea32bb68-0572-42ca-9dc6-8829c8d5929a",
    reportName: "2023-05-09 13:28",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-12T07:39:26.733Z",
  },
  {
    reportId: "e3a76010-93af-4b00-bc76-f81ec9f3261a",
    reportName: "2023-05-11 11:40",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-11T06:22:17.223Z",
  },
  {
    reportId: "0f965a93-d14c-485b-a27e-071649d31159",
    reportName: "2023-05-10 17:36",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-11T05:46:40.633Z",
  },
  {
    reportId: "b07a1fa5-b1fc-478d-ac09-785710570993",
    reportName: "2023-05-11 11:12",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-11T05:46:31.47Z",
  },
  {
    reportId: "909d9cae-f1f0-45e0-b1c9-ab0b0ad231bb",
    reportName: "2023-05-10 17:02",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T14:46:35.997Z",
  },
  {
    reportId: "c73f013f-1dba-4acc-a035-c7fd2a5f3047",
    reportName: "2023-05-10 20:13",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T14:45:55.103Z",
  },
  {
    reportId: "6fe51d38-8e6c-4096-a8fe-f540b825764a",
    reportName: "2023-05-10 17:41 (2)",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T12:12:00.477Z",
  },
  {
    reportId: "eabe5e02-a240-4edd-b9ca-84c3c5e94957",
    reportName: "2023-05-10 17:33",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T12:06:19.547Z",
  },
  {
    reportId: "855f96a0-6e62-4b2a-83b4-ad6e7c8a8022",
    reportName: "2023-05-10 17:32",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T12:03:05.133Z",
  },
  {
    reportId: "0deeef6f-7472-4c8c-b3a9-d8153e16078b",
    reportName: "2023-05-10 17:17",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T11:48:01.41Z",
  },
  {
    reportId: "777234a2-b26f-46dd-964f-a118ac1466d6",
    reportName: "2023-05-10 17:04",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T11:34:55.653Z",
  },
  {
    reportId: "0db07232-fae1-4915-99e3-906c7817b56e",
    reportName: "2023-05-10 15:37",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T10:07:17.867Z",
  },
  {
    reportId: "6052180d-68b0-44c4-9514-83ef3732c2dc",
    reportName: "2023-05-10 15:32",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T10:03:34.647Z",
  },
  {
    reportId: "7c37abf9-fe99-4457-becf-cd6aef69d037",
    reportName: "2023-05-10 15:18",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T09:50:25.903Z",
  },
  {
    reportId: "fcce5ec2-a907-4294-8f24-c6e5fa5126e8",
    reportName: "2023-05-10 15:14",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T09:44:52.817Z",
  },
  {
    reportId: "943ae075-aa8e-4f59-a4e4-53cb80332e70",
    reportName: "2023-05-10 11:21",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:52:04.997Z",
  },
  {
    reportId: "82faec90-f17d-4e3d-b51c-fe8a5cd7c8cf",
    reportName: "2023-05-10 11:18",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:50:28.397Z",
  },
  {
    reportId: "b69cea0d-2f5b-447e-ba14-f60bc99aadc6",
    reportName: "2023-05-10 11:15",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:45:32.033Z",
  },
  {
    reportId: "9cc32e53-e672-4b8e-af92-c3f0503ea50f",
    reportName: "2023-05-10 11:13",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:43:24.86Z",
  },
  {
    reportId: "d445c54e-db99-4d65-a5fa-6189d24a892b",
    reportName: "2023-05-10 11:07",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:41:11.51Z",
  },
  {
    reportId: "47601e76-510e-4638-93e6-166b09e968d0",
    reportName: "2023-05-10 11:02",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:33:03.737Z",
  },
  {
    reportId: "c0a8bfc4-d8d8-453a-85bf-ed24b0b01f5d",
    reportName: "2023-05-10 10:59",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-10T05:29:45.007Z",
  },
  {
    reportId: "0f5696a1-8d0c-4376-a810-52d56e4fcdb9",
    reportName: "2023-05-09 19:33",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-09T14:04:50.38Z",
  },
  {
    reportId: "a444323d-c1bf-4df4-8e97-c084b6e12b95",
    reportName: "2023-05-09 19:26",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-09T13:59:10.98Z",
  },
  {
    reportId: "bd60b07d-b6ab-480a-a842-e48e5369b25a",
    reportName: "2023-05-09 18:59",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-09T13:31:21.907Z",
  },
  {
    reportId: "5fad7017-25dd-47e5-b8e2-a1ea84897efa",
    reportName: "2023-05-09 18:56",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-09T13:27:02.753Z",
  },
  {
    reportId: "3cb06a21-aaf5-4feb-a065-37de908f20c3",
    reportName: "2023-05-09 18:39",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-09T13:19:42.91Z",
  },
  {
    reportId: "97014d7f-e651-496f-8a60-479c87abb99d",
    reportName: "2023-05-09 11:25",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-05-09T05:55:32.273Z",
  },
  {
    reportId: "cfae53fa-9565-42e2-83ca-91a86c1131af",
    reportName: "2023-04-26 17:48",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-04-26T12:19:03.403Z",
  },
  {
    reportId: "e34b792c-a09d-469c-bb6d-cc0f7d012ba5",
    reportName: "2023-04-26 16:56",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-04-26T11:29:04.323Z",
  },
  {
    reportId: "a3b0e7b0-9cb4-4c37-8f35-3786efad747e",
    reportName: "2023-04-26 16:00",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-04-26T10:43:31.31Z",
  },
  {
    reportId: "caaf5e46-b087-4c8f-aad8-bcaa6af6cb5d",
    reportName: "2023-04-26 15:45",
    createdBy: "Shubham Kaushik",
    createdUserEmail: "shubhamkhaushik@gmail.com",
    lastActivityDate: "2023-04-26T10:16:06.463Z",
  },
];

export const tieredMenuData: ShadowMenu[] = [
  {
    label: "Home",
    url: "/",
    icon: "pi pi-home",
    className: "danger",
  },
  {
    label: "Boards",
    url: "/boards",
    icon: "pi pi-th-large",
    useTemplate: true,
  },
];

export const sideMenuData = [
  {
    label: "Home",
    url: "/",
    icon: "pi pi-home",
  },
  {
    label: "Accordion",
    url: "/accordion",
    icon: "pi pi-th-large",
  },
  {
    label: "Area Action",
    url: "/area-action",
    icon: "pi pi-th-large",
  },
  {
    label: "Avatar",
    url: "/avatar",
    icon: "pi pi-th-large",
  },
  {
    label: "Badge",
    url: "/badge",
    icon: "pi pi-th-large",
  },
  {
    label: "Banner",
    url: "/banner",
    icon: "pi pi-th-large",
  },
  {
    label: "Breadcrumb",
    url: "/breadcrumb",
    icon: "pi pi-th-large",
  },
  {
    label: "Button",
    url: "/button",
    icon: "pi pi-th-large",
  },
  {
    label: "Button Group",
    url: "/button-group",
    icon: "pi pi-th-large",
  },
  {
    label: "Calendar",
    url: "/calendar",
    icon: "pi pi-th-large",
  },
  {
    label: "Card",
    url: "/card",
    icon: "pi pi-th-large",
  },
  {
    label: "Chart",
    url: "/chart",
    icon: "pi pi-th-large",
  },
  {
    label: "Chat Box",
    url: "/chatbox",
    icon: "pi pi-th-large",
  },
  {
    label: "Checkbox",
    url: "/checkbox",
    icon: "pi pi-th-large",
  },
  {
    label: "Chips",
    url: "/chip",
    icon: "pi pi-th-large",
  },
  {
    label: "Dialog",
    url: "/dialog",
    icon: "pi pi-th-large",
  },
  {
    label: "Divider",
    url: "/divider",
    icon: "pi pi-th-large",
  },
  {
    label: "Dropdown",
    url: "/dropdown",
    icon: "pi pi-th-large",
  },
  {
    label: "Dropbox",
    url: "/dropbox",
    icon: "pi pi-th-large",
  },
  {
    label: "Input Group",
    url: "/input-group",
    icon: "pi pi-th-large",
  },
  {
    label: "Input Mask",
    url: "/input-mask",
    icon: "pi pi-th-large",
  },
  {
    label: "Input Switch",
    url: "/input-switch",
    icon: "pi pi-th-large",
  },
  {
    label: "Input Text",
    url: "/input-text",
    icon: "pi pi-th-large",
  },
  {
    label: "Message",
    url: "/message",
    icon: "pi pi-th-large",
  },
  {
    label: "Message Inline",
    url: "/message-inline",
    icon: "pi pi-th-large",
  },
  {
    label: "Multi Select",
    url: "/multi-select",
    icon: "pi pi-th-large",
  },
  {
    label: "Notifications Panel",
    url: "/notifications-panel",
    icon: "pi pi-th-large",
  },
  {
    label: "Overlay Panel",
    url: "/overlay-panel",
    icon: "pi pi-th-large",
  },
  {
    label: "Panel",
    url: "/panel",
    icon: "pi pi-th-large",
    useTemplate: false,
  },
  {
    label: "Preview",
    url: "/preview",
    icon: "pi pi-th-large",
    useTemplate: false,
  },
  {
    label: "Radio",
    url: "/radio",
    icon: "pi pi-th-large",
    useTemplate: false,
  },
  {
    label: "Sales Tree",
    url: "/sales-tree",
    icon: "pi pi-th-large",
  },
  {
    label: "Select Button",
    url: "/select-button",
    icon: "pi pi-th-large",
  },
  {
    label: "Side Menu",
    url: "/side-menu",
    icon: "pi pi-th-large",
  },
  {
    label: "Share Popup",
    url: "/share-popup",
    icon: "pi pi-th-large",
  },
  {
    label: "Steps",
    url: "/steps",
    icon: "pi pi-th-large",
  },
  {
    label: "Tab",
    url: "/tab",
    icon: "pi pi-th-large",
  },
  {
    label: "Table",
    url: "/table",
    icon: "pi pi-th-large",
  },
  {
    label: "Tag",
    url: "/tag",
    icon: "pi pi-th-large",
  },
  {
    label: "Text Area",
    url: "/text-area",
    icon: "pi pi-th-large",
  },
  {
    label: "Tiered Menu",
    url: "/tiered-menu",
    icon: "pi pi-th-large",
  },
  {
    label: "Toast",
    url: "/toast",
    icon: "pi pi-th-large",
  },
  {
    label: "Toolbar",
    url: "/toolbar",
    icon: "pi pi-th-large",
  },
  {
    label: "Toolkit Sidebar",
    url: "/toolkit-sidebar",
    icon: "pi pi-th-large",
  },
  {
    label: "Tooltip",
    url: "/tooltip",
    icon: "pi pi-th-large",
  },
  {
    label: "Tree",
    url: "/tree",
    icon: "pi pi-th-large",
  }

 
];

export const utilitiesMenuData = [
  {
    label: "Help",
    url: "/help",
    icon: "pi pi-question-circle",
  },
  {
    label: "Notifications",
    icon: "pi pi-bell",
    badge: {
      value: "5",
    },
  },
  {
    label: "Settings",
    url: "/settings",
    icon: "pi pi-cog",
  },
];

export const treeData: ShadowTreeNode[] = [
  {
    key: "0",
    label: "Documents",
    data: "Documents Folder",
    // expandedIcon: "pi pi-folder-open",
    selectable: true,
    icon: "pi pi-folder",
    children: [
      {
        key: "0-0",
        label: "Work",
        data: "Work Folder",
        // expandedIcon: "pi pi-folder-open",
        selectable: true,
        icon: "pi pi-folder",
        children: [
          {
            key: "0-0-0",
            label: "Expenses.doc",
            selectable: true,
            icon: "pi pi-file",
            data: "Expenses Document",
          },
          { key: "0-0-1", label: "Resume.doc", selectable: true, icon: "pi pi-file", data: "Resume Document" },
        ],
      },
      {
        key: "0-1",
        label: "Home",
        data: "Home Folder",
        // expandedIcon: "pi pi-folder-open",
        selectable: true,
        icon: "pi pi-folder",
        children: [
          {
            key: "0-0-0",
            label: "Invoices.txt",
            icon: "pi pi-file",
            data: "Invoices for this month",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Pictures",
    data: "Pictures Folder",
    // expandedIcon: "pi pi-folder-open",
    selectable: true,
    icon: "pi pi-folder",
    children: [
      { key: "1-0", label: "barcelona.jpg", selectable: true, icon: "pi pi-image", data: "Barcelona Photo" },
      { key: "1-1", label: "logo.jpg", selectable: true, icon: "pi pi-image", data: "PrimeFaces Logo" },
      { key: "1-2", label: "primeui.png", selectable: true, icon: "pi pi-image", data: "PrimeUI Logo" },
    ],
  },
  {
    key: "2",
    label: "Movies",
    data: "Movies Folder",
    selectable: true,
    // expandedIcon: "pi pi-folder-open",
    icon: "pi pi-folder",
    children: [
      {
        key: "2-0",
        label: "Al Pacino",
        data: "Pacino Movies",
        selectable: true,
        children: [
          { key: "2-0-0", label: "Scarface", selectable: true, icon: "pi pi-video", data: "Scarface Movie" },
          { key: "2-0-1", label: "Serpico", selectable: true, icon: "pi pi-video", data: "Serpico Movie" },
        ],
      },
      {
        key: "2-1",
        label: "Robert De Niro",
        data: "De Niro Movies",
        selectable: true,
        children: [
          {
            key: "2-1-0",
            label: "Goodfellas",
            selectable: true,
            icon: "pi pi-video",
            data: "Goodfellas Movie",
          },
          {
            key: "2-1-1",
            label: "Untouchables",
            selectable: true,
            icon: "pi pi-video",
            data: "Untouchables Movie",
          },
        ],
      },
    ],
  },
];
