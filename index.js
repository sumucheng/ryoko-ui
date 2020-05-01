import Button from './src/button'
import Row from './src/row'
import Col from './src/col'
import Layout from './src/layout'
import Header from './src/header'
import Footer from './src/footer'
import Sider from './src/sider'
import Content from './src/content'
import Toast from './src/toast'
import plugin from './src/plugin'
import Collapse from './src/collapse'
import CollapseItem from './src/collapse-item'
import Radio from './src/radio'
import RadioGroup from './src/radio-group'
import RadioButton from './src/radio-button'
import Checkbox from './src/checkbox'
import CheckboxGroup from './src/checkbox-group'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item'
import Tabs from './src/tabs'
import TabsBody from './src/tabs-body'
import TabsHead from './src/tabs-head'
import TabsPane from './src/tabs-pane'
import TabsTab from './src/tabs-tab'
import Popover from './src/popover'
const components = [
    Button,
    Row, Col,
    Layout, Header, Footer, Sider, Content,
    Toast,
    TimelineItem, Timeline,
    Checkbox, CheckboxGroup,
    Radio, RadioGroup, RadioButton,
    Collapse, CollapseItem,
    Tabs, TabsBody, TabsHead, TabsPane, TabsTab,
    Popover
]
const install = function (Vue) {
    console.log(components)
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    Vue.use(plugin);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    install,
    Button,
    Row, Col,
    Layout, Header, Footer, Sider, Content,
    Toast, plugin,
    TimelineItem, Timeline,
    Checkbox, CheckboxGroup,
    Radio, RadioGroup, RadioButton,
    Collapse, CollapseItem,
    Tabs, TabsBody, TabsHead, TabsPane, TabsTab,
    Popover
}