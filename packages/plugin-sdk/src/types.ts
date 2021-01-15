import { ClientSideBasePluginConfig, RawClientSideBasePluginConfig } from "@graphql-codegen/visitor-plugin-common";
import { ArgDefinition, PluginContext } from "@linear/plugin-common";
import { FieldDefinitionNode, ObjectTypeDefinitionNode, OperationDefinitionNode } from "graphql";

export interface RawSdkPluginConfig extends RawClientSideBasePluginConfig {
  /**
   * @description The relative filepath to generated documents
   *
   * @exampleMarkdown
   * ```yml
   * documents: "./src/documents/**"
   * generates:
   *   sdk-documents.ts:
   *     plugins:
   *       - typescript
   *       - typescript-operations
   *       - typed-document-node
   *   output-file.ts:
   *     plugins:
   *       - @linear/plugin-sdk
   *     config:
   *       documentFile: "./sdk-documents"
   * ```
   */
  documentFile: string;
}

export interface SdkPluginConfig extends ClientSideBasePluginConfig {
  documentFile: string;
}

/**
 * Definition for generating an sdk operation
 */
export interface SdkOperation {
  /** The name of this operation */
  name: string;
  /** The path through the schema to return this data */
  path: string[];
  /** The graphql node being processed with chain info added */
  node: OperationDefinitionNode;
  /** The query for this operation */
  query?: FieldDefinitionNode;
  /** The fragment returned by this operation */
  fragment?: ObjectTypeDefinitionNode;
  /** The model for this operation */
  model?: SdkModel;
  /** The parsed and printed required variables */
  requiredVariables: Record<string, ArgDefinition>;
  /** The name of the generated graphql document */
  documentVariableName?: string;
  /** The type of the graphql operation */
  operationType?: string;
  /** The type of the result from the graphql operation */
  operationResultType?: string;
  /** The type of the variables for the graphql operation */
  operationVariablesTypes?: string;
  /** The type returned from this operation */
  returnType: string;
}

/**
 * A pairing between an operation field and the definitions corresponding to the field
 */
export interface SdkOperationObject {
  /** The operation field node */
  field: FieldDefinitionNode;
  /** The matching sdk definition */
  definition: SdkDefinition;
  /** The matching query definition */
  queryDefinition: SdkOperation;
}

/**
 * Definition for generating an sdk
 */
export interface SdkDefinition {
  /** The api keys by which to nest operations */
  sdkPath: string[];
  /** The name of the sdk function */
  sdkName: string;
  /** The name of the sdk function type */
  sdkType: string;
  /** The operations to generate */
  operations: SdkOperation[];
}

/**
 * A map from api key to each sdk definition
 */
export type SdkDefinitions = Record<string, SdkDefinition>;

/**
 * The plugin context specific to the sdk plugin config
 */
export interface SdkPluginContext extends PluginContext<RawSdkPluginConfig> {
  /** Processed models for output */
  models: SdkModel[];
  /** All definitions for the sdk */
  sdkDefinitions: SdkDefinitions;
}

/**
 * Available field types
 */
export enum SdkModelFieldType {
  scalar = "SdkScalarField ",
  query = "SdkQueryField ",
  object = "SdkObjectField ",
  list = "SdkListField ",
  scalarList = "SdkScalarListField",
}

/**
 * A field with scalar type
 */
export interface SdkScalarField {
  __typename: SdkModelFieldType.scalar;
  /** The field definition */
  node: FieldDefinitionNode;
  /** The name of the field */
  name: string;
  /** Printed typescript type */
  type: string;
}

/**
 * A field with list type
 */
export interface SdkScalarListField extends Omit<SdkScalarField, "__typename"> {
  __typename: SdkModelFieldType.scalarList;
  /** The type of the list */
  listType: string;
}

/**
 * A field with object type and a matching query
 */
export interface SdkQueryField extends Omit<SdkScalarField, "__typename"> {
  __typename: SdkModelFieldType.query;
  /** A query for returning this field if it exists */
  query: FieldDefinitionNode;
  /** The list of all arguments for the query */
  args: ArgDefinition[];
}

/**
 * A field with object type
 */
export interface SdkObjectField extends Omit<SdkScalarField, "__typename"> {
  __typename: SdkModelFieldType.object;
  /** The object matching this field */
  object: ObjectTypeDefinitionNode;
}

/**
 * A field with list type
 */
export interface SdkListField extends Omit<SdkScalarField, "__typename"> {
  __typename: SdkModelFieldType.list;
  /** The type of the list */
  listType: string;
}

/**
 * One of the model field types
 */

export type SdkModelField = SdkScalarField | SdkQueryField | SdkObjectField | SdkListField | SdkScalarListField;

/**
 * The processed sdk model node
 */
export interface SdkModelNode extends Omit<ObjectTypeDefinitionNode, "fields"> {
  /** The processed field nodes */
  fields?: SdkModelField[];
}

/**
 * A model definition for the sdk
 */
export interface SdkModel {
  /** The name of the object */
  name: string;
  /** The object definition */
  node: SdkModelNode;
  /** The map of fields keyed by type */
  fields: {
    scalar: SdkScalarField[];
    query: SdkQueryField[];
    object: SdkObjectField[];
    list: SdkListField[];
    scalarList: SdkScalarListField[];
  };
}