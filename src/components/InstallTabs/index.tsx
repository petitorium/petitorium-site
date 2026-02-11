import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';

export default function InstallTabs() {

  const commands = {
    linux: 'curl -fsSL https://petitorium.dev/install.sh | bash',
    macos: 'curl -fsSL https://petitorium.dev/install.sh | bash',
    windows: 'powershell -ExecutionPolicy Bypass -c "irm https://petitorium.dev/install.ps1 | iex"',
  };

  return (
    <Tabs>
      <TabItem value="linux" label="Linux" default attributes={{ className: styles.white }}>
        <div style={{ maxWidth: '500px' }}>
          <CodeBlock language="bash">{commands.linux}</CodeBlock>
        </div>
      </TabItem>
      <TabItem value="macos" label="macOS" attributes={{ className: styles.white }}>
        <div style={{ maxWidth: '500px' }}>
          <CodeBlock language="bash">{commands.macos}</CodeBlock>
        </div>
      </TabItem>
      <TabItem value="windows" label="Windows" attributes={{ className: styles.white }}>
        <div style={{ maxWidth: '500px' }}>
          <CodeBlock language="powershell">{commands.windows}</CodeBlock>
        </div>
      </TabItem>
    </Tabs>
  );
}
