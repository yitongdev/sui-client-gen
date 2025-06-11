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
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isDecreaseValidatorStakeEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::DecreaseValidatorStakeEvent`;
}

export interface DecreaseValidatorStakeEventFields {
  typename: ToField<TypeName>;
  stakingPoolId: ToField<ID>;
  amount: ToField<"u64">;
}

export type DecreaseValidatorStakeEventReified = Reified<
  DecreaseValidatorStakeEvent,
  DecreaseValidatorStakeEventFields
>;

/**
 * Move struct: `DecreaseValidatorStakeEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class DecreaseValidatorStakeEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::DecreaseValidatorStakeEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = DecreaseValidatorStakeEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::DecreaseValidatorStakeEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = DecreaseValidatorStakeEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly stakingPoolId: ToField<ID>;
  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: DecreaseValidatorStakeEventFields) {
    this.$fullTypeName = composeSuiType(
      DecreaseValidatorStakeEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::DecreaseValidatorStakeEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.stakingPoolId = fields.stakingPoolId;
    this.amount = fields.amount;
  }

  static reified(): DecreaseValidatorStakeEventReified {
    return {
      typeName: DecreaseValidatorStakeEvent.$typeName,
      fullTypeName: composeSuiType(
        DecreaseValidatorStakeEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::DecreaseValidatorStakeEvent`,
      typeArgs: [] as [],
      isPhantom: DecreaseValidatorStakeEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        DecreaseValidatorStakeEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        DecreaseValidatorStakeEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => DecreaseValidatorStakeEvent.fromBcs(data),
      bcs: DecreaseValidatorStakeEvent.bcs,
      fromJSONField: (field: any) =>
        DecreaseValidatorStakeEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        DecreaseValidatorStakeEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        DecreaseValidatorStakeEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        DecreaseValidatorStakeEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        DecreaseValidatorStakeEvent.fetch(client, id),
      new: (fields: DecreaseValidatorStakeEventFields) => {
        return new DecreaseValidatorStakeEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return DecreaseValidatorStakeEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<DecreaseValidatorStakeEvent>> {
    return phantom(DecreaseValidatorStakeEvent.reified());
  }
  static get p() {
    return DecreaseValidatorStakeEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("DecreaseValidatorStakeEvent", {
      typename: TypeName.bcs,
      staking_pool_id: ID.bcs,
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): DecreaseValidatorStakeEvent {
    return DecreaseValidatorStakeEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      stakingPoolId: decodeFromFields(ID.reified(), fields.staking_pool_id),
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(
    item: FieldsWithTypes,
  ): DecreaseValidatorStakeEvent {
    if (!isDecreaseValidatorStakeEvent(item.type)) {
      throw new Error("not a DecreaseValidatorStakeEvent type");
    }

    return DecreaseValidatorStakeEvent.reified().new({
      typename: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.typename,
      ),
      stakingPoolId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.staking_pool_id,
      ),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): DecreaseValidatorStakeEvent {
    return DecreaseValidatorStakeEvent.fromFields(
      DecreaseValidatorStakeEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      stakingPoolId: this.stakingPoolId,
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): DecreaseValidatorStakeEvent {
    return DecreaseValidatorStakeEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      stakingPoolId: decodeFromJSONField(ID.reified(), field.stakingPoolId),
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): DecreaseValidatorStakeEvent {
    if (json.$typeName !== DecreaseValidatorStakeEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return DecreaseValidatorStakeEvent.fromJSONField(json);
  }

  static fromSuiParsedData(
    content: SuiParsedData,
  ): DecreaseValidatorStakeEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isDecreaseValidatorStakeEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a DecreaseValidatorStakeEvent object`,
      );
    }
    return DecreaseValidatorStakeEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): DecreaseValidatorStakeEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isDecreaseValidatorStakeEvent(data.bcs.type)
      ) {
        throw new Error(
          `object at is not a DecreaseValidatorStakeEvent object`,
        );
      }

      return DecreaseValidatorStakeEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return DecreaseValidatorStakeEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<DecreaseValidatorStakeEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching DecreaseValidatorStakeEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isDecreaseValidatorStakeEvent(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a DecreaseValidatorStakeEvent object`,
      );
    }

    return DecreaseValidatorStakeEvent.fromSuiObjectData(res.data);
  }
}
