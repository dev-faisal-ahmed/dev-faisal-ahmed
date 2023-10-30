'use client';
import Image from 'next/image';
import { ProjectType } from '@/utils/types';
import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import { ProjectModal } from './project-modal';
import { ProjectShortInfo } from './project-short-info';

export function ProjectContainer(projectInfo: ProjectType) {
  const [modalState, setModalState] = useState(false);
  const onModalOpen = () => setModalState(true);
  const onModalClose = () => setModalState(false);

  return (
    <>
      <ProjectShortInfo {...projectInfo} onModalOpen={onModalOpen} />
      <ProjectModal
        {...projectInfo}
        modalSate={modalState}
        onModalClose={onModalClose}
      />
    </>
  );
}
