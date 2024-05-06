import React from 'react'
import { ShadowButton } from "shadow-ui-react";


const Button = () => {
  return (
    <>
      <div>
        {/* primary brand start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Primary (Brand)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="primary" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="primary" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="primary" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="sm" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="primary" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="primary" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="primary" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="md" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="primary" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="primary" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="lg" buttonActionStyle="brand" />
            </div>
          </div>
        </div>
        {/* primary brand end */}
        {/* Secondary brand start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Secondary (Brand)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="secondary" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="secondary" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="secondary" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="sm" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="secondary" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="secondary" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="secondary" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="md" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="secondary" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="secondary" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="secondary" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="lg" buttonActionStyle="brand" />
            </div>
          </div>
        </div>
        {/* Secondar brand end */}
        {/* text brand start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Text (Brand)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="text" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="text" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="text" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="sm" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="text" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="text" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="text" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="md" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="text" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="text" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="text" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="lg" buttonActionStyle="brand" />
            </div>
          </div>
        </div>
        {/* text brand end */}
        {/* link brand start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Link (Brand)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="link" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="link" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="link" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="link" size="sm" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="link" size="sm" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="link" size="sm" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="link" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="link" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="link" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="link" size="md" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="link" size="md" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="link" size="md" buttonActionStyle="brand" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="link" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" label="" buttonType="link" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="link" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="link" size="lg" buttonActionStyle="brand" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="link" size="lg" buttonActionStyle="brand" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="link" size="lg" buttonActionStyle="brand" />
            </div>
          </div>
        </div>
        {/* link brand end */}
        <div style={{ backgroundColor: '#0074E8', padding: '1rem 0' }}>
          {/* primary contrast start */}
          <div style={{ textAlign: 'center', margin: '1rem' }}>
            <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Primary (contrast)</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="small" buttonType="primary" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="sm" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="primary" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="sm" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="primary" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="sm" buttonActionStyle="contrast" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="medium" buttonType="primary" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="md" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="primary" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="md" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="primary" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="md" buttonActionStyle="contrast" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="lg" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="primary" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="lg" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="primary" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="lg" buttonActionStyle="contrast" />
              </div>
            </div>
          </div>
          {/* primary contrast end */}
          {/* Secondary contrast start */}
          <div style={{ textAlign: 'center', margin: '1rem' }}>
            <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Secondary (contrast)</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="small" buttonType="secondary" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="sm" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="secondary" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="sm" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="secondary" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="sm" buttonActionStyle="contrast" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="medium" buttonType="secondary" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="md" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="secondary" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="md" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="secondary" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="md" buttonActionStyle="contrast" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="large" buttonType="secondary" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="lg" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="secondary" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="lg" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="secondary" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="lg" buttonActionStyle="contrast" />
              </div>
            </div>
          </div>
          {/* Secondar contrast end */}
          {/* text contrast start */}
          <div style={{ textAlign: 'center', margin: '1rem' }}>
            <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Text (contrast)</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="small" buttonType="text" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="text" size="sm" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="text" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="sm" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="text" size="sm" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="sm" buttonActionStyle="contrast" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="medium" buttonType="text" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="text" size="md" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="text" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="md" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="text" size="md" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="md" buttonActionStyle="contrast" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" label="large" buttonType="text" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" label="" buttonType="text" size="lg" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="text" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="lg" buttonActionStyle="contrast" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="text" size="lg" buttonActionStyle="contrast" />
                <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="lg" buttonActionStyle="contrast" />
              </div>
            </div>
          </div>
          {/* text contrast end */}
        </div>
        {/* primary destructive start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Primary (destructive)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="primary" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="sm" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="primary" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="sm" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="primary" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="sm" buttonActionStyle="destructive" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="primary" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="md" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="primary" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="md" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="primary" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="md" buttonActionStyle="destructive" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="lg" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="primary" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="lg" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="primary" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="lg" buttonActionStyle="destructive" />
            </div>
          </div>
        </div>
        {/* primary destructive end */}
        {/* Secondary destructive start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Secondary (destructive)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="secondary" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="sm" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="secondary" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="sm" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="secondary" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="sm" buttonActionStyle="destructive" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="secondary" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="md" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="secondary" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="md" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="secondary" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="md" buttonActionStyle="destructive" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="secondary" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="secondary" size="lg" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="secondary" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="secondary" size="lg" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="secondary" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="secondary" size="lg" buttonActionStyle="destructive" />
            </div>
          </div>
        </div>
        {/* Secondar destructive end */}
        {/* text destructive start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Text (destructive)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="text" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="sm" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="text" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="sm" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="text" size="sm" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="sm" buttonActionStyle="destructive" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="text" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="md" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="text" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="md" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="text" size="md" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="md" buttonActionStyle="destructive" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="text" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="lg" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="text" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="lg" buttonActionStyle="destructive" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="text" size="lg" buttonActionStyle="destructive" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="lg" buttonActionStyle="destructive" />
            </div>
          </div>
        </div>
        {/* text contrast end */}
        {/* primary success start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Primary (success)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="primary" size="sm" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="sm" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="primary" size="sm" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="sm" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="primary" size="sm" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="sm" buttonActionStyle="success" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="primary" size="md" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="md" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="primary" size="md" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="md" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="primary" size="md" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="md" buttonActionStyle="success" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="lg" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="primary" size="lg" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="lg" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="primary" size="lg" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="lg" buttonActionStyle="success" />
            </div>
          </div>
        </div>
        {/* primary success end */}
        {/* text success start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Text (success)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="text" size="sm" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="sm" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="text" size="sm" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="sm" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="text" size="sm" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="sm" buttonActionStyle="success" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="text" size="md" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="md" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="text" size="md" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="md" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="text" size="md" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="md" buttonActionStyle="success" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="text" size="lg" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="lg" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="text" size="lg" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="lg" buttonActionStyle="success" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="text" size="lg" buttonActionStyle="success" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="lg" buttonActionStyle="success" />
            </div>
          </div>
        </div>
        {/* text contrast end */}
        {/* primary warning start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Primary (warning)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="primary" size="sm" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="sm" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="primary" size="sm" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="sm" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="primary" size="sm" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="sm" buttonActionStyle="warning" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="primary" size="md" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="md" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="primary" size="md" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="md" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="primary" size="md" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="md" buttonActionStyle="warning" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="primary" size="lg" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" label="" buttonType="primary" size="lg" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="primary" size="lg" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="primary" size="lg" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="primary" size="lg" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="primary" size="lg" buttonActionStyle="warning" />
            </div>
          </div>
        </div>
        {/* primary warning end */}
        {/* text warning start */}
        <div style={{ textAlign: 'center', margin: '1rem' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>Text (warning)</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="small" buttonType="text" size="sm" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="sm" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="small" buttonType="text" size="sm" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="sm" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="small" buttonType="text" size="sm" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="sm" buttonActionStyle="warning" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="medium" buttonType="text" size="md" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="md" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="medium" buttonType="text" size="md" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="md" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="medium" buttonType="text" size="md" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="md" buttonActionStyle="warning" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" label="large" buttonType="text" size="lg" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" label="" buttonType="text" size="lg" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" loading={true} label="large" buttonType="text" size="lg" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" loading={true} label="" buttonType="text" size="lg" buttonActionStyle="warning" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ShadowButton icon="pi pi-users" disabled={true} label="large" buttonType="text" size="lg" buttonActionStyle="warning" />
              <ShadowButton icon="pi pi-users" disabled={true} label="" buttonType="text" size="lg" buttonActionStyle="warning" />
            </div>
          </div>
        </div>
        {/* text contrast end */}
      </div>
    </>
  )
}

export default Button