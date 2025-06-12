import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../_framework/reified.js";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isCreateEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::CreateEvent`;
}

export interface CreateEventFields {
  typename: ToField<TypeName>;
  liquidStakingInfoId: ToField<ID>;
}

export type CreateEventReified = Reified<CreateEvent, CreateEventFields>;

/**
 * Move struct: `CreateEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class CreateEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::CreateEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = CreateEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::CreateEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = CreateEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly liquidStakingInfoId: ToField<ID>;

  private constructor(typeArgs: [], fields: CreateEventFields) {
    this.$fullTypeName = composeSuiType(
      CreateEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::CreateEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.liquidStakingInfoId = fields.liquidStakingInfoId;
  }

  static reified(): CreateEventReified {
    return {
      typeName: CreateEvent.$typeName,
      fullTypeName: composeSuiType(
        CreateEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::CreateEvent`,
      typeArgs: [] as [],
      isPhantom: CreateEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => CreateEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => CreateEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => CreateEvent.fromBcs(data),
      bcs: CreateEvent.bcs,
      fromJSONField: (field: any) => CreateEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => CreateEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => CreateEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => CreateEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => CreateEvent.fetch(client, id),
      new: (fields: CreateEventFields) => {
        return new CreateEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CreateEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<CreateEvent>> {
    return phantom(CreateEvent.reified());
  }
  static get p() {
    return CreateEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("CreateEvent", {
      typename: TypeName.bcs,
      liquid_staking_info_id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): CreateEvent {
    return CreateEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      liquidStakingInfoId: decodeFromFields(ID.reified(), fields.liquid_staking_info_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): CreateEvent {
    if (!isCreateEvent(item.type)) {
      throw new Error("not a CreateEvent type");
    }

    return CreateEvent.reified().new({
      typename: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.typename),
      liquidStakingInfoId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.liquid_staking_info_id,
      ),
    });
  }

  static fromBcs(data: Uint8Array): CreateEvent {
    return CreateEvent.fromFields(CreateEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      liquidStakingInfoId: this.liquidStakingInfoId,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): CreateEvent {
    return CreateEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      liquidStakingInfoId: decodeFromJSONField(ID.reified(), field.liquidStakingInfoId),
    });
  }

  static fromJSON(json: Record<string, any>): CreateEvent {
    if (json.$typeName !== CreateEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return CreateEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): CreateEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCreateEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a CreateEvent object`);
    }
    return CreateEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): CreateEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCreateEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a CreateEvent object`);
      }

      return CreateEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CreateEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<CreateEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching CreateEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isCreateEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a CreateEvent object`);
    }

    return CreateEvent.fromSuiObjectData(res.data);
  }
}
