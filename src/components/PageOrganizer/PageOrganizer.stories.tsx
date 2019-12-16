import { action } from '@storybook/addon-actions';
import React, { useCallback, useState, useEffect, FC } from 'react';
import { File } from '../../hooks/useFile';
import PageOrganizer, { PageOrganizerProps } from '../PageOrganizer';
import Thumbnail from '../Thumbnail';
import docs from './README.md';
import { number, boolean } from '@storybook/addon-knobs';
import { createFile } from '../../storybook-helpers/data/files';

export default { title: 'PageOrganizer', parameters: { info: docs } };

export const Basic: FC<{ numFiles: number }> = () => {
  const [files, setFiles] = useState<File[]>([]);

  const numFiles = number('number of pages', 2);
  useEffect(() => {
    setFiles(prev => {
      if (prev.length > numFiles) {
        return prev.slice(0, numFiles);
      }
      if (prev.length < numFiles) {
        const newFiles = [];
        for (let index = prev.length; index < numFiles; index++) {
          newFiles.push(createFile(index));
        }
        return [...prev, ...newFiles];
      }
      return prev;
    });
  }, [numFiles]);

  const handleOnMove = useCallback<NonNullable<PageOrganizerProps['onMove']>>((...args) => {
    action('onMove')(...args);
    const [fromIndex, toIndex] = args;
    setFiles(prev => {
      const clone = prev.slice();
      const item = clone.splice(fromIndex, 1)[0];
      clone.splice(toIndex, 0, item);
      return clone;
    });
  }, []);

  return (
    <PageOrganizer
      files={files}
      onMove={handleOnMove}
      preventArrowsToMove={boolean('preventArrowsToMove', false)}
      onRenderThumbnail={(file, isDragging) => (
        <Thumbnail file={file} style={isDragging ? { opacity: 0.4 } : undefined} />
      )}
    />
  );
};