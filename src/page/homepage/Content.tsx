import React from 'react';
import { Card, Text } from '@geist-ui/react';
import styles from './content.module.scss';
import { composeClassNames } from '../../utils/boost';

/**
 * 临时占位内容
 */
const Content = () => (
  <>
    <section className={composeClassNames('section-container', styles.Content)}>
      <Text h3 style={{ color: '#383838' }}>
        # 协会制造
      </Text>
      <Card
        width="100%"
        style={{
          backgroundColor: '#222222',
          color: '#ffffff',
          height: '500px',
          textAlign: 'center',
          lineHeight: '500px',
        }}
      >
        Holder
      </Card>
    </section>
    <section className={composeClassNames('section-container', styles.Content)}>
      <Text h3 style={{ color: '#383838' }}>
        # 每周一聚
      </Text>
      <Card
        shadow
        width="100%"
        style={{
          backgroundColor: '#222222',
          color: '#ffffff',
          height: '500px',
          textAlign: 'center',
          lineHeight: '500px',
        }}
      >
        Holder
      </Card>
    </section>
    <section className={composeClassNames('section-container', styles.Content)}>
      <Text h3 style={{ color: '#383838' }}>
        # 加入我们
      </Text>
      <Card
        shadow
        width="100%"
        style={{
          backgroundColor: '#222222',
          color: '#ffffff',
          height: '500px',
          textAlign: 'center',
          lineHeight: '500px',
        }}
      >
        Holder
      </Card>
    </section>
  </>
);

export { Content };
