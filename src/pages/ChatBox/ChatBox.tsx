import React, { useState, useEffect } from 'react'
import styles from './ChatBox.module.scss'
import { ShadowToolkit, ShadowToolkitSidebar, ShadowChatBox } from "shadow-ui-react";

const ChatBox = () => {
    const toolkitItems: any[] = [
      {
        section: 'Section 1',
        items: [
          {
            label: 'Ai',
            routerLink: '',
            icon: '../assets/icons/ai-menu-filled.svg',
            selectedIcon: '../assets/icons/ai-menu-white.svg',
            padding: 8
          },
          {
            label: 'Recent',
            routerLink: '',
            icon: '../assets/icons/recent-filled.svg',
            selectedIcon: '../assets/icons/recent.svg',
            padding: 10
          }
        ]
      },
      {
        section: 'Section 2',
        items: [
          {
            label: 'Add',
            routerLink: '',
            icon: '../assets/icons/plus.svg',
            selectedIcon: '../assets/icons/plus-white.svg',
            padding: 10
          },
          {
            label: 'Notification',
            routerLink: '',
            icon: '../assets/icons/notification.svg',
            selectedIcon: '../assets/icons/notification-white.svg',
            padding: 10
          },
          {
            label: 'Setting',
            routerLink: '',
            icon: '../assets/icons/setting.svg',
            selectedIcon: '../assets/icons/setting-white.svg',
            padding: 10
          }
        ]
      },
      {
        section: 'Section 3',
        items: [
          {
            label: 'Chat',
            routerLink: '',
            icon: '../assets/icons/chat.svg',
            selectedIcon: '../assets/icons/chat-white.svg',
            padding: 10
          }
        ]
      }
    ]

    const toolkitStyle: any = {
        iconWidth: 40,
        iconHeight: 40,
    };

    const [selectedToolkit, setSelectedToolkit] = useState('')

    const selectToolkitHandler = (event: any) => {
        console.log(event, selectedToolkit)
        if (selectedToolkit == "Ai" && event == "Ai") {
            setSelectedToolkit('')
        } else {
            setSelectedToolkit(event);
        }
    };

    const closeSideBar = () => {
        setSelectedToolkit('')
    }

    const [chatBoxStyle] = useState({
        width: "350px",
        logo: '../assets/icons/ai-menu-filled.svg',
        inputBoxPlaceholder: 'Ask your data question',
        inputAttachmentIcon: '../assets/icons/attachment.svg',
        actionDropDownIcon: '../assets/icons/action-dropdown.svg',
        chatBoxHeight: '100vh'
    });

    const [emptyChatContent] = useState({
        title: 'AI-Driven Insights Companion',
        icon: '../assets/icons/ai-menu-filled.svg',
        inputPlaceholder: 'Ask your data question',
        searchIcon: '../assets/icons/search-white.svg',
        showEmptyChatHeader: true,
    });

    const [popularDataSkill, setPopularDataSkill] = useState({
        title: 'Start Exploring Popular Data Skills',
        icon: '../assets/icons/bolt.svg',
        arrowIcon: '../assets/icons/arrow-right.svg',
        dataSkills: [
            {
                icon: '../assets/icons/question-green.svg',
                iconBackgroundColor: '#E6F3F1',
                title: 'General Insights Questions',
            },
            {
                icon: '../assets/icons/search-pink.svg',
                iconBackgroundColor: '#FBF0FF',
                title: 'Explore and Run Diagnostics',
            },
            {
                icon: '../assets/icons/route-orange.svg',
                iconBackgroundColor: '#FAEDE6',
                title: 'Future and “What if” Scenarios',
            },
        ],
        showPopularDataSkill: false,
    });

    const [savedTemplates, setSavedTemplate] = useState({
        showSavedTemplate: true,
        icon: '../assets/icons/search-blue.svg',
        title: 'Or Start with Saved Templates',
        templates: [
            {
                title: 'Generate Monday Report',
                routerLink: '',
            },
            {
                title: 'Show CINDE Insights Panel',
                routerLink: '',
            },
        ],
    });

    const [showChatUi, setShowChatUi] = useState(true); // Initialize this value as needed
    const [chatMessages, setChatMessages]: any = useState([]);
    const [showChat, setShowChat] = useState(false);
    const [query, setQuery] = useState('');
    const [userIcon, setUserIcon] = useState('');
    const [userName, setUserName] = useState('Aniruddha Banerjee');
    const [chatAiName] = useState('AI Copilot');
    const [promptList] = useState([
        {
            label: 'Help Promt 1',
        },
        {
            label: 'Help Prompt 2',
        },
    ]);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [aiLoading, setAiLoading] = useState(false);
    const [errorMessage] = useState('An error occurred.'); // Customize this error message
    const [sideMenuData, setSideMenuData] = useState([]);
    const [steps] = useState([]); // Define the steps array as needed
    const [showStopGenerating, setShowStopGenerating] = useState(true); // Define this value as needed

    useEffect(() => {
        setSideMenuData(sideMenuData); // Replace this with your actual side menu data
    }, []);

    const toggleChatUI = () => {
        setChatMessages([
            ...chatMessages,
            {
                isAI: true,
                text: 'Hello from Chat AI message',
                id: `${chatMessages.length}`,
                chart: false,
                isChatActionArea: true,
                areaActionButtonOption: {
                    title: 'Recomandation',
                    primaryButtonText: 'Pin to Broad',
                    primaryButtonType: 'primary',
                    secondaryButtonType: 'secondary',
                    secondaryButtonText: 'Preview',
                    primaryButtonIcon: 'pi pi-eye',
                    secondaryButtonIcon: 'pi pi-comments',
                    data: { key: 'action area data test', value: 'Hello' },
                },
                isDisabled: false,
                date: new Date().toISOString(),
            },
        ]);
        setShowChatUi(!showChatUi);
    };

    const handleChatInputChange = (event: any) => {
        setQuery(event)
    }
    const recomendedPromptHandler = (event: any) => {
        if (event.type === 'ACTION') {
            setChatMessages([
                ...chatMessages,
                {
                    isAI: true,
                    text: 'Hello from Chat AI message',
                    id: `${chatMessages.length}`,
                    chart: false,
                    isChatActionArea: true,
                    areaActionButtonOption: {
                        title: 'Recomandation',
                        primaryButtonText: 'Pin to Broad',
                        primaryButtonType: 'primary',
                        secondaryButtonType: 'secondary',
                        secondaryButtonText: 'Preview',
                        primaryButtonIcon: 'pi pi-eye',
                        secondaryButtonIcon: 'pi pi-comments',
                        data: { key: 'action area data test', value: 'Hello' },
                    },
                    isDisabled: false,
                    date: new Date().toISOString(),
                },
            ]);
        } else {
            setChatMessages([
                ...chatMessages,
                {
                    isAI: false,
                    text: event.prompt,
                    id: `${chatMessages.length}`,
                    chart: false,
                    isDisabled: false,
                    recomendedPrompts: [
                        {
                            showIcon: true,
                            icon: 'pi pi-map-marker',
                            type: 'CHAT',
                            prompt: 'Test 1',
                            data: { icon: 'abc', value: 'xyz' },
                        },
                        {
                            type: 'ACTION',
                            actionType: 'WIDGET',
                            showIcon: true,
                            icon: 'pi pi-map-marker',
                            prompt: 'Test 2',
                            data: { icon: 'rt', value: 'test 2' },
                        },
                    ],
                    date: new Date().toISOString(),
                },
            ]);
        }
    };

    const areaActionHandler = (event: any) => {
        console.log(event);
    };

    const popularDataClickHandler = (event: any) => {
        console.log(event);
    };

    const onSearch = (event: any) => {
        const filteredSideMenu = sideMenuData.filter((value: any) =>
            value.label?.toLowerCase().includes(event.toLowerCase())
        );
        setSideMenuData(filteredSideMenu);
    };

    const toggleChat = (event: any) => {
        setChatMessages([
            ...chatMessages,
            {
                isAI: false,
                text: event,
                index: generateUniqueId(),
                chart: false,
                isDisabled: false,
                date: new Date().toISOString(),
            },
            {
                isAI: true,
                text: "AI Processed Content",
                index: generateUniqueId(),
                chart: false,
                isDisabled: false,
                date: new Date().toISOString(),
            },
        ]);
        setQuery('');
        // askQuestion(event);
        // setAiLoading(true);
        setShowChat(!showChat);
    };

    const askQuestion = (event: any) => {
        // setIsInputDisabled(true);
        const uniqueId = generateUniqueId();
        setChatMessages([
            ...chatMessages,
            {
                isAI: false,
                text: event,
                index: uniqueId,
                chart: false,
                isDisabled: false,
                date: new Date().toISOString(),
            },
            {
                isAI: true,
                text: "AI Processed Content",
                index: generateUniqueId(),
                chart: false,
                isDisabled: false,
                date: new Date().toISOString(),
                recomendedPrompts : [
                    {
                      showIcon: true,
                      icon: 'pi pi-map-marker',
                      type: 'ACTION',
                      prompt: 'Make this widget',
                    },
                    {
                      type: 'CHAT',
                      actionType: 'WIDGET',
                      prompt: 'How can we help you',
                    },
                  ]
            },
        ]);

        // const url = `http://localhost:8000/askCINDE?question=${event}`;

        // setAiLoading(true);
        setQuery('');

        // setChatMessages([
        //     ...chatMessages,
        //     {
        //         isAI: true,
        //         text: '',
        //         id: uniqueId + '',
        //         isDisabled: true,
        //         showStepper: true,
        //         stepperData: steps,
        //     },
        // ]);

        // axios
        //     .get(url)
        //     .then((response) => {
        //         prepareResponse(response.data);
        //         setAiLoading(false);
        //         setIsInputDisabled(false);
        //     })
        //     .catch((error) => {
        //         prepareResponse(errorMessage);
        //         setAiLoading(false);
        //         setIsInputDisabled(false);
        //     });
    };

    const onActionSelectHandler = (e: any) => {
        console.log(e);
    };

    const prepareResponse = (data: any) => {
        try {
            const output = JSON.parse(data?.output);
            const chatMessage = chatMessages.pop() || { isAI: false, text: '' };
            chatMessage.isAI = true;
            chatMessage.date = new Date().toISOString();
            chatMessage.isDisabled = false;
            chatMessage.text = data?.output || errorMessage;
            chatMessage.showAction = true;
            chatMessage.actionItems = [{ label: 'Test1' }, { label: 'Test2' }];
            chatMessage.recomendedPrompts = [
                {
                    showIcon: true,
                    icon: 'pi pi-map-marker',
                    type: 'ACTION',
                    prompt: 'Make this widget',
                },
                {
                    type: 'CHAT',
                    actionType: 'WIDGET',
                    prompt: 'How can we help you',
                },
            ];
            setChatMessages([...chatMessages, chatMessage]);
        } catch (e) { }
    };

    const createFormattedResposne = (data: any) => {
        let innerHTML = '';
        innerHTML += '<table class="table-wrapper">';
        Object.keys(data).forEach((key) => {
            innerHTML += '<tr class="table-row">';
            innerHTML += '<td class="table-col">' + key + '</td>';
            innerHTML += '<td class="table-col">' + data[key] + '</td>';
            innerHTML += '</tr>';
        });
        innerHTML += '</table>';
        return innerHTML;
    };

    const generateUniqueId = () => {
        return Math.random();
    };


    return (
        <div className={styles['chatbox-wrapper']}>
            <ShadowToolkit
                toolkitItems={toolkitItems}
                selectedToolKit={selectedToolkit}
                toolkitStyle={toolkitStyle}
                selectToolkitHandler={selectToolkitHandler}
            ></ShadowToolkit>
            {selectedToolkit == 'Ai' && <ShadowToolkitSidebar
                closeSideBar={closeSideBar}
                title="AI Board Exploration"
                toolkitSidebarOption={{ width: '350px',closeIconPosition:'left' }}>
       
                <ShadowChatBox
                    popularDataClickHandler={popularDataClickHandler}
                    areaActionHandler={areaActionHandler}
                    onActionSelectHandler={onActionSelectHandler}
                    recomendedPromptHandler={recomendedPromptHandler}
                    chatBoxStyle={chatBoxStyle}
                    emptyChatContent={emptyChatContent}
                    popularDataSkill={popularDataSkill}
                    savedTemplates={savedTemplates}
                    showChat={showChat}
                    query={query}
                    chatMessages={chatMessages}
                    userIcon={userIcon}
                    userName={userName}
                    chatAiName={chatAiName}
                    promptList={promptList}
                    isInputDisabled={isInputDisabled}
                    aiLoading={aiLoading}
                    onSubmit={askQuestion}
                    toggleChat={toggleChat}
                    toggleChatUI={toggleChatUI}
                    closeSideBar={() => selectToolkitHandler('Ai')}
                    handleChatInputChange={handleChatInputChange}
                />
            </ShadowToolkitSidebar >}
        </div >
    )
}

export default ChatBox