import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Chức năng',
        path: '/chucnang',
        icon:<AiIcons.AiFillHome/>,
        iconClose: <RiIcons.RiArrowDownSFill/>,
        iconOops: <RiIcons.RiArrowUpSFill/>,
        subNav:[
            {
                title: 'Đặt phòng',
                path: '/chucnang/datphong',
                 icon:<IoIcons.IoIosPaper/>,
            },

            {
                title: 'Trả phòng',
                path: '/chucnang/traphong',
                 icon:<IoIcons.IoIosPaper/>,
            }
        ]
    },

    {
        title: 'Phòng',
        path: '/phong',
        icon:<AiIcons.AiFillHome/>,
        iconClose: <RiIcons.RiArrowDownSFill/>,
        iconOops: <RiIcons.RiArrowUpSFill/>,
        
    },

    {
        title: 'Khách hàng',
        path: '/customers',
         icon:<IoIcons.IoIosPaper/>,
    },  

    {
        title: 'Dịch vụ',
        path: '/service',
         icon:<IoIcons.IoIosPaper/>,
    },  

    {
        title: 'Nhân viên',
        path: '/employee',
         icon:<IoIcons.IoIosPaper/>,
    }, 

    {
        title: 'Báo cáo',
        path: '/report',
         icon:<IoIcons.IoIosPaper/>,
         iconClose: <RiIcons.RiArrowDownSFill/>,
         iconOops: <RiIcons.RiArrowUpSFill/>,
         subNav:[
             {
                 title: 'Thống kê phòng',
                 path: '/report/roomReport',
                  icon:<IoIcons.IoIosPaper/>,
             },
 
             {
                 title: 'Doanh thu dịch vụ',
                 path: '/report/serviceReport',
                  icon:<IoIcons.IoIosPaper/>,
             },
             {
                title: 'Số lượng khách',
                path: '/report/cusReport',
                 icon:<IoIcons.IoIosPaper/>,
            },
         ]
    }, 
]