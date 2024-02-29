import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

import { styleBl5Form00 } from '../../HcmMainStyle';
import { styleBl5Form01, styleBl2Form02 } from '../../HcmMainStyle';
import { fetchUserDepartments } from '../../../actions';

interface RenderTree {
  code: string;
  name: string;
  parent?: string;
  children?: RenderTree[];
}

const HcmBl2Form100 = (props: { close: Function; open: boolean }) => {
  const dispatch = useDispatch();
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  const loggedInUser = useSelector((state: any) => state.loggedInUser);

  React.useEffect(() => {
    dispatch(fetchUserDepartments(loggedInUser.login));
  }, [loggedInUser, dispatch]);

  const userDepartments = useSelector((state: any) => state.userDepartments);
  //=== Style ==============================================
  const styleSetPK04 = {
    marginTop: 1.2,
    display: 'flex',
    justifyContent: 'center',
  };

  const styleFormPK03 = {
    maxHeight: '30px',
    minHeight: '30px',
    bgcolor: '#E6F5D6', // светло салатовый
    border: '1px solid #000',
    borderRadius: 1,
    borderColor: '#d4d4d4', // серый
    textTransform: 'unset !important',
    //padding: "6px 6px 6px 6px",
    boxShadow: 6,
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
    color: '#5B1080', // сиреневый
  };
  //=== Функции - обработчики ==============================
  const onSelect = () => {
    selectedDepartment && props.close(selectedDepartment);
  };

  const onCancel = () => {
    props.close();
  };

  const handleSelect = (event: React.SyntheticEvent, nodeId: string) => {
    setSelectedDepartment(nodeId);
  };
  //========================================================
  const listToTree = (list: Array<RenderTree>): Array<RenderTree> => {
    var map = new Map<string, number>();
    var node,
      roots = [],
      i;

    for (i = 0; i < list.length; i += 1) {
      const key: string = list[i].code;
      map.set(key, i); // initialize the map
      list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      const parent: string | undefined = node.parent;
      if (parent && map.get(parent!)) {
        // if you have dangling branches check that map[node.parentId] exists
        list[map.get(parent)!].children!.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  };

  const renderTree = (nodes: RenderTree) => (
    <TreeItem key={nodes.code} nodeId={nodes.code} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  let heightBlock = window.innerHeight - 50;

  // ширина окна - 1-й параметр стиля styleBl5Form00, 2-й параметр - высота

  return (
    <>
      <Modal open={props.open} hideBackdrop={false}>
        <Box sx={styleBl5Form00(777, heightBlock)}>
          <Box sx={styleBl5Form01}>
            <b>Фильтр подразделений</b>
          </Box>
          <Box sx={styleBl2Form02(145)}>
            {userDepartments && (
              <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={['root']}
                onNodeSelect={handleSelect}
                defaultExpandIcon={<ChevronRightIcon />}>
                {renderTree({
                  code: 'root',
                  name: 'Все подразделения',
                  children: listToTree(userDepartments),
                })}
              </TreeView>
            )}
          </Box>
          <Box sx={styleSetPK04}>
            <Box sx={{ display: 'inline-block', margin: '0px 6px 0px 6px' }}>
              <Button sx={styleFormPK03} onClick={() => onCancel()}>
                Отмена
              </Button>
            </Box>
            <Box sx={{ display: 'inline-block', margin: '0px 5px 0px 0px' }}>
              <Button sx={styleFormPK03} onClick={() => onSelect()}>
                Выбрать
              </Button>
            </Box>
          </Box>
          {/* <Box sx={{ margin: '10px' }}>
            <Button
              onClick={() => {
                onSelect();
              }}
              variant="contained">
              Выбрать
            </Button>
            <Button
              onClick={() => {
                onCancel();
              }}>
              Отмена
            </Button>
          </Box> */}
        </Box>
      </Modal>
    </>
  );
};

export default HcmBl2Form100;
